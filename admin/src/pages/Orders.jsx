import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>Orders</h3>
      <div>
        {orders.map(order => (
          <div
            className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 rounded-lg shadow-sm'
            key={order._id}
          >
            <img className='w-12' src={assets.parcel_icon} alt='Order Icon' />
            <div>
              <p className='text-gray-500 text-s'>Order ID: {order._id}</p>
              <p className='mt-3  font-medium'>
                Cliente: {order.address.firstName} {order.address.lastName}
              </p>
              <p>{order.address.street},</p>
              <p className='mb-6'>
                {order.address.city}, {order.address.state},{' '}
                {order.address.country}, {order.address.zipcode}
              </p>

              <div className='space-y-2'>
                {order.items.map((item, index) => (
                  <div key={index} className='border-b pb-2'>
                    <div className='flex items-center gap-3'>
                      <img
                        className='w-16 sm:w-20'
                        src={item.image[0]}
                        alt=''
                      />
                      <p className='font-medium'>
                        {item.cod} - {item.name}
                      </p>
                    </div>
                    <div className='flex items-center mt-1'>
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p className='font-medium ml-2'>Qtd. x {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-sm sm:text-[15px]'>
                Items: {order.items.length}
              </p>
              <p className='mt-3'>Forma de Pgto: {order.paymentMethod}</p>
              <p>Pagamento: {order.payment ? 'Done' : 'Pending'}</p>
              <p className='font-semibold'>
                Data do pedido: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <p className='text-sm sm:text-[15px] font-semibold'>
              Total do pedido: {currency}{' '}
              {order.amount.toFixed(2).replace('.', ',')}
            </p>
            <select
              onChange={event => statusHandler(event, order._id)}
              value={order.status}
              className='p-2 font-semibold border border-gray-300 rounded-md'
            >
              <option value='Pedido Realizado'>Pedido Realizado</option>
              <option value='Preparando'>Preparando</option>
              <option value='Enviado'>Enviado</option>
              <option value='Saiu para entrega'>Saiu para entrega</option>
              <option value='Entregue'>Entregue</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
