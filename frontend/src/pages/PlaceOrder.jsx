import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async event => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find(product => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: method,
      };

      switch (method) {
        case 'cod':
          const response = await axios.post(
            backendUrl + '/api/order/place',
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(
            backendUrl + '/api/order/stripe',
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        case 'paypal':
          const responsePayPal = await axios.post(
            backendUrl + '/api/order/paypal',
            orderData,
            { headers: { token } }
          );
          if (responsePayPal.data.success) {
            const { approvalUrl } = responsePayPal.data;
            window.location.href = approvalUrl;
          } else {
            toast.error(responsePayPal.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-8 lg:px-20'
    >
      {/* ------------- Left Side ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DETALHES DA'} text2={'ENTREGA'} />
        </div>
        <div className='flex gap-3'>
          <input
            required
            onChange={onChangeHandler}
            name='firstName'
            value={formData.firstName}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='Nome'
          />
          <input
            required
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='Sobrenome'
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='email'
          placeholder='Email'
        />
        <input
          required
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='text'
          placeholder='Endereço'
        />
        <div className='flex gap-3'>
          <input
            required
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='Cidade'
          />
          <input
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='Estado'
          />
        </div>
        <div className='flex gap-3'>
          <input
            required
            onChange={onChangeHandler}
            name='zipcode'
            value={formData.zipcode}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='CEP'
          />
          <input
            required
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            placeholder='País'
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name='phone'
          value={formData.phone}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='number'
          placeholder='Telefone'
        />
      </div>

      {/* ------------- Right Side ------------------ */}
      <div className='mt-8 w-full sm:w-auto'>
        <div className='mt-8'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'FORMA DE'} text2={'PAGAMENTO'} />
          {/* --------------- Payment Method Selection ------------- */}
          <div className='flex flex-col sm:flex-row gap-3'>
            {/* Stripe */}
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer ${
                method === 'stripe'
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === 'stripe'
                    ? 'bg-green-400 border-green-400'
                    : 'border-gray-400'
                }`}
              ></div>
              <img
                className='h-8' // Aumentei a altura para 32px
                src={assets.stripe_logo}
                alt='Stripe'
              />
            </div>

            {/* PayPal */}
            <div
              onClick={() => setMethod('paypal')}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer ${
                method === 'paypal'
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === 'paypal'
                    ? 'bg-green-400 border-green-400'
                    : 'border-gray-400'
                }`}
              ></div>
              <img
                className='h-8' // Aumentei a altura para 32px
                src={assets.paypal_logo}
                alt='PayPal'
              />
            </div>

            {/* Boleto */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer ${
                method === 'cod'
                  ? 'border-green-400 bg-green-50'
                  : 'border-gray-300'
              }`}
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === 'cod'
                    ? 'bg-green-400 border-green-400'
                    : 'border-gray-400'
                }`}
              ></div>
              <img
                className='h-8' // Aumentei a altura para 32px
                src={assets.boleto_logo}
                alt='Boleto'
              />
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            {method === 'paypal' ? (
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: (getCartAmount() + delivery_fee).toFixed(2),
                          currency_code: 'BRL',
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  try {
                    const details = await actions.order.capture();
                    console.log('Pagamento aprovado:', details);

                    const response = await axios.post(
                      backendUrl + '/api/order/verifyPaypal',
                      { orderId: data.orderID },
                      { headers: { token } }
                    );

                    if (response.data.success) {
                      setCartItems({});
                      navigate('/orders');
                    } else {
                      toast.error(response.data.message);
                    }
                  } catch (error) {
                    console.error('Erro ao processar pagamento:', error);
                    toast.error('Erro ao processar pagamento.');
                  }
                }}
                onError={error => {
                  console.error('Erro no PayPal:', error);
                  toast.error('Erro no PayPal. Tente novamente.');
                }}
              />
            ) : (
              <button
                type='submit'
                className='bg-black text-white px-16 py-3 text-sm rounded-lg hover:bg-gray-800 transition-colors'
              >
                FINALIZAR COMPRA
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
