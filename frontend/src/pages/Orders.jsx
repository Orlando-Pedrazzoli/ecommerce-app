import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        let allOrders = [];
        response.data.orders.forEach(order => {
          const orderGroup = {
            orderId: order._id, // Assuming the backend provides an order ID
            date: order.date,
            paymentMethod: order.paymentMethod,
            status: order.status,
            items: order.items.map(item => ({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            })),
          };
          allOrders.push(orderGroup);
        });
        setOrderData(allOrders.reverse()); // Reverse to show latest orders first
      }
    } catch (error) {
      console.error('Error loading order data:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t pt-16 mx-4 md:mx-8 lg:mx-16'>
      <div className='text-2xl'>
        <Title text1={'MEUS'} text2={'PEDIDOS'} />
      </div>

      {orderData.map((order, orderIndex) => (
        <div key={orderIndex} className='mt-8'>
          <h2 className='text-xl font-semibold mb-4'>
            Pedido #{order.orderId} - Feito em:{' '}
            {new Date(order.date).toLocaleDateString('pt-BR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
          <div className='space-y-4'>
            {order.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
              >
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantidade: {item.quantity}</p>
                      <p>Tamanho: {item.size}</p>
                    </div>
                    <p className='mt-1'>
                      Data:{' '}
                      <span className='text-gray-400'>
                        {new Date(item.date).toLocaleDateString('pt-BR')}
                      </span>
                    </p>
                    <p className='mt-1'>
                      Pagamento:{' '}
                      <span className='text-gray-400'>
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                  </div>
                  <button
                    onClick={loadOrderData}
                    className='border px-4 py-2 text-sm font-medium rounded-sm'
                  >
                    Acompanhar Pedido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
