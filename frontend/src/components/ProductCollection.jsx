import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Title from './Title';

const ProductCollection = () => {
  const navigate = useNavigate();

  const handleNavigate = category => {
    navigate('/collection', {
      state: {
        category,
        subCategory: null, // Não seleciona subcategoria de início
      },
    });
  };

  return (
    <section>
      <div className='w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center py-8 text-3xl'>
          <Title text2={'PRODUTOS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore nossas coleções incríveis e escolha o que mais combina com
            você!
          </p>
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2'>
          <li onClick={() => handleNavigate('Decks')}>
            <div className='group block relative overflow-hidden cursor-pointer'>
              <img
                src={assets.productCollection8}
                alt='Decks'
                className='h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span
                  className='text-white text-5xl font-bold group-hover:scale-110 transition-transform duration-500'
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
                >
                  Decks
                </span>
              </div>
            </div>
          </li>

          <li onClick={() => handleNavigate('Leashes')}>
            <div className='group block relative overflow-hidden cursor-pointer'>
              <img
                src={assets.productCollection10}
                alt='Leashes'
                className='h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span
                  className='text-white text-5xl font-bold group-hover:scale-110 transition-transform duration-500'
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
                >
                  Leashes
                </span>
              </div>
            </div>
          </li>

          <li onClick={() => handleNavigate('Capas')}>
            <div className='group block relative overflow-hidden cursor-pointer'>
              <img
                src={assets.productCollection9}
                alt='Capas'
                className='h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span
                  className='text-white text-5xl font-bold group-hover:scale-110 transition-transform duration-500'
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
                >
                  Capas
                </span>
              </div>
            </div>
          </li>

          <li onClick={() => handleNavigate('Acessórios')}>
            <div className='group block relative overflow-hidden cursor-pointer'>
              <img
                src={assets.productCollection13}
                alt='Acessórios'
                className='h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <span
                  className='text-white text-5xl font-bold group-hover:scale-110 transition-transform duration-500'
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
                >
                  Acessórios
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductCollection;
