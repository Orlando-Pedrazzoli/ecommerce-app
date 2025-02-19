import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 8));
  }, [products]);

  return (
    <div className='px-4 sm:px-6 md:px-20'>
      <div className='text-center text-3xl py-6 sm:py-8 md:py-10'>
        <Title text1={'MAIS'} text2={'VENDIDOS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          "Os favoritos dos nossos clientes: alta qualidade e ótimas
          avaliações!"
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className='w-[90%] mx-auto sm:w-full sm:mx-0 p-2 sm:p-0 bg-gray-200 sm:bg-transparent rounded-lg'
          >
            <ProductItem
              id={item._id}
              cod={item.cod}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
