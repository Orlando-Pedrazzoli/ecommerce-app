import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, cod, onlyImage = false }) => {
  const { currency } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className='text-gray-700 cursor-pointer'
      to={`/product/${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='p-2 border border-gray-300 rounded-lg sm:border-0 sm:rounded-none'>
        <div className='overflow-hidden'>
          <img
            className='hover:scale-110 transition ease-linear'
            src={isHovered ? image[1] : image[0]}
            alt=''
          />
        </div>

        {!onlyImage && (
          <>
            <p className='pt-3 pb-1 text-xs sm:text-sm'>
              <span className='block sm:inline'>{cod}</span>
              <span className='sm:ml-2 block sm:inline'>{name}</span>
            </p>
            <p className='text-lg font-medium'>
              {currency}
              {(Number(price) || 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
