import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Title from './Title';

const ProductCollection = () => {
  const navigate = useNavigate();

  const categoryMap = {
    [assets.productCollection11]: 'Decks',
    [assets.productCollection13]: 'Leash Premium',
    [assets.productCollection51]: 'Capa Premium',
    [assets.productCollection50]: 'Capa Toalha',
    [assets.productCollection54]: 'Sarcófagos',
    [assets.productCollection53]: 'Acessórios',
  };

  const handleNavigate = category => {
    navigate('/collection', {
      state: {
        category,
        subCategory: null, // Não seleciona subcategoria de início
      },
    });
  };

  return (
    <section className='sm:mx-6 lg:mx-8'>
      <div className='w-full px-4 py-4 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center py-8 text-3xl'>
          <Title text2={'PRODUTOS'} />
          <p className='w-full md:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore nossas coleções incríveis e escolha o que mais combina com
            você!
          </p>
        </header>

        <ul className='mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {Object.entries(categoryMap).map(([img, category], index) => (
            <li
              key={index}
              onClick={() => handleNavigate(category)}
              className='group block relative overflow-hidden cursor-pointer'
            >
              <img
                src={img}
                alt={category}
                className='h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[400px]'
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50'>
                <span className='text-white text-xl sm:text-3xl lg:text-4xl font-bold transition-transform duration-500 group-hover:scale-110'>
                  {category.toUpperCase()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductCollection;
