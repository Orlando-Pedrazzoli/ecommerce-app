import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrders = response.data.orders.map(order => ({
          orderId: order._id,
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
        }));

        setOrderData(allOrders.reverse());
      }
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t pt-16 px-4 sm:px-8 lg:px-16'>
      <div className='text-2xl'>
        <Title text1={'MEUS'} text2={'PEDIDOS'} />
      </div>

      {orderData.map((order, orderIndex) => (
        <div
          key={orderIndex}
          className='mt-8 border p-4 rounded-lg shadow-sm bg-white'
        >
          <h2 className='text-lg sm:text-xl font-semibold mb-4'>
            Pedido <span className='text-gray-500'>#{order.orderId}</span> -
            Feito em:{' '}
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
                className='py-4 border-t text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'
              >
                <div className='flex items-start gap-4 sm:gap-6 text-sm w-full'>
                  <img
                    className='w-16 sm:w-20 rounded-md'
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div className='flex-1 min-w-0'>
                    <p className='sm:text-base font-medium truncate'>
                      <span>{item.cod}</span>{' '}
                      <span className='ml-2'>{item.name}</span>
                    </p>
                    <div className='flex flex-wrap items-center gap-3 mt-1 text-sm sm:text-base text-gray-700'>
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p>Quantidade: {item.quantity}</p>
                    </div>
                    <p className='mt-1 text-gray-500 text-xs sm:text-sm'>
                      Data: {new Date(item.date).toLocaleDateString('pt-BR')}
                    </p>
                    {/*  <p className='mt-1 text-gray-500 text-xs sm:text-sm'>
                      Pagamento: {item.paymentMethod}
                    </p> */}
                  </div>
                </div>

                <div className='flex justify-between sm:justify-end items-center w-full sm:w-auto'>
                  <div className='flex items-center gap-2'>
                    <span className='w-3 h-3 rounded-full bg-green-500'></span>
                    <p className='text-sm sm:text-base'>{item.status}</p>
                  </div>
                  <button
                    onClick={loadOrderData}
                    className='border px-3 py-2 text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition'
                  >
                    Aguarde Status do Pedido
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
