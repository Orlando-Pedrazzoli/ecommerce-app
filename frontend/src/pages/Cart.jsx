import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className=' text-2xl mb-3'>
        <Title text1={'CARRINHO'} text2={'DE COMPRAS'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            product => product._id === item._id
          );

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-1 xs:grid-cols-[3fr_2fr] sm:grid-cols-[4fr_2fr] items-center gap-2 sm:gap-4'
            >
              <div className='flex items-start gap-3 sm:gap-6 flex-wrap'>
                <img
                  className='w-14 sm:w-20'
                  src={productData.image[0]}
                  alt=''
                />
                <div className='flex-1 min-w-0'>
                  <p className='text-xs sm:text-lg font-medium truncate'>
                    {productData.cod}
                    <span className='ml-2'>{productData.name}</span>
                  </p>
                  <div className='flex items-center gap-2 sm:gap-5 mt-1 sm:mt-2'>
                    <p className='text-sm sm:text-base'>
                      {currency}
                      {productData.price}
                    </p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs sm:text-sm'>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Alinhando botões e ícone de lixeira */}
              <div className='flex justify-between items-center w-full sm:w-auto'>
                <div className='flex items-center gap-1 sm:gap-2'>
                  <button
                    className='px-2 py-1 border bg-slate-100 text-sm sm:text-lg'
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(item._id, item.size, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className='px-2'>{item.quantity}</span>
                  <button
                    className='px-2 py-1 border bg-slate-100 text-sm sm:text-lg'
                    onClick={() =>
                      updateQuantity(item._id, item.size, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-4 mr-2 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt=''
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className=' w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm my-8 px-8 py-3'
            >
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
