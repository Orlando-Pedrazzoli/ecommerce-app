import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';
import razorpay from 'razorpay';
import nodemailer from 'nodemailer';
import paypal from '@paypal/checkout-server-sdk';
import paypalClient from '../config/paypal.js'; // Importe o cliente PayPal

// Global variables
const currency = 'BRL'; // Moeda brasileira
const deliveryCharge = 10;

// Gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use seu serviço de e-mail (ex: Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Seu e-mail
    pass: process.env.EMAIL_PASSWORD, // Sua senha ou senha de app
  },
});

// Função para criar um pedido no PayPal
const placeOrderPaypal = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Salvar o pedido no banco de dados
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'PayPal',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Criar o pedido no PayPal
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency, // BRL (Real brasileiro)
            value: amount.toString(), // Valor total do pedido
          },
        },
      ],
    });

    // Executar a requisição e obter a URL de aprovação
    const response = await paypalClient.execute(request);
    const approvalUrl = response.result.links.find(
      link => link.rel === 'approve'
    ).href;

    res.json({ success: true, approvalUrl, orderId: newOrder._id });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para verificar o pagamento no PayPal
const verifyPaypal = async (req, res) => {
  try {
    const { orderId } = req.body;

    // Capturar o pagamento no PayPal
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    const response = await paypalClient.execute(request);

    // Verificar se o pagamento foi aprovado
    if (response.result.status === 'COMPLETED') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: 'Pagamento aprovado!' });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: 'Pagamento falhou.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para criar um pedido (COD)
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: 'Pedido realizado!' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para criar um pedido com Stripe
const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Stripe',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map(item => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: 'Taxa de entrega',
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para verificar o pagamento com Stripe
const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para criar um pedido com Razorpay
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Razorpay',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para verificar o pagamento com Razorpay
const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === 'paid') {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: 'Pagamento aprovado!' });
    } else {
      res.json({ success: false, message: 'Pagamento falhou.' });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para listar todos os pedidos (Admin)
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para listar pedidos do usuário
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para atualizar o status do pedido (Admin)
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status atualizado!' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Função para enviar detalhes do pedido por e-mail
const sendOrderEmail = async (req, res) => {
  const { orderId, email } = req.body;

  try {
    // Buscar detalhes do pedido
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.json({ success: false, message: 'Pedido não encontrado.' });
    }

    // Formatar detalhes do pedido para o e-mail
    const orderDetails = order.items
      .map(
        item => `
        <p><strong>Produto:</strong> ${item.name}</p>
        <p><strong>Preço:</strong> ${item.price} ${currency}</p>
        <p><strong>Quantidade:</strong> ${item.quantity}</p>
        <hr />
      `
      )
      .join('');

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Remetente
      to: email, // Destinatário
      subject: `Detalhes do Pedido #${orderId}`, // Assunto
      html: `
        <h1>Detalhes do Pedido</h1>
        <p><strong>ID do Pedido:</strong> ${orderId}</p>
        <p><strong>Data:</strong> ${new Date(
          order.date
        ).toLocaleDateString()}</p>
        <p><strong>Método de Pagamento:</strong> ${order.paymentMethod}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <h2>Itens:</h2>
        ${orderDetails}
      `,
    };

    // Enviar e-mail
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.json({ success: false, message: 'Falha ao enviar e-mail.' });
  }
};

// Exportar todas as funções
export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  placeOrderPaypal,
  verifyPaypal,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
  sendOrderEmail,
};
