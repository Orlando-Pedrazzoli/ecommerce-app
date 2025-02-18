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
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-linear'
          src={isHovered ? image[1] : image[0]}
          alt=''
        />
      </div>

      {!onlyImage && (
        <>
          <p className='pt-3 pb-1 text-sm'>
            <span>{cod}</span>
            <span className='ml-2'>{name}</span>
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
    </Link>
  );
};

export default ProductItem;
