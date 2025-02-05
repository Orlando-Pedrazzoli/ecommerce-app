import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const formattedSubtotal = getCartAmount().toFixed(2);
  const formattedDeliveryFee = delivery_fee.toFixed(2);
  const formattedTotal = (getCartAmount() + delivery_fee).toFixed(2);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'TOTAL'} text2={'CARRINHO'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>
            {currency}
            {formattedSubtotal}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Frete (Entraremos em contato para negociar o valor)</p>
          <p>
            {currency}
            {formattedDeliveryFee}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>
            {currency}
            {formattedTotal}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
