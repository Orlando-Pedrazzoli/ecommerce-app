import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Title from './Title';

const ProductCollection = () => {
  const navigate = useNavigate();

  const products = [
    { img: assets.productCollection11, category: 'DECKS', path: '/decks' },
    { img: assets.productCollection13, category: 'LEASHES', path: '/leashes' },
    {
      img: assets.productCollection51,
      category: 'CAPAS',
      path: '/collection',
      state: { category: 'Capa Premium', subCategory: null },
    },
    {
      img: assets.productCollection50,
      category: 'Capa Toalha',
      path: '/collection',
      state: { category: 'Capa Toalha', subCategory: null },
    },
    {
      img: assets.productCollection54,
      category: 'Sarcófagos',
      path: '/collection',
      state: { category: 'Sarcófagos', subCategory: null },
    },
    {
      img: assets.productCollection53,
      category: 'Acessórios',
      path: '/collection',
      state: { category: 'Acessórios', subCategory: null },
    },
  ];

  const handleNavigate = category => {
    const product = products.find(p => p.category === category);
    navigate(
      product.path,
      product.state ? { state: product.state } : undefined
    );
  };

  return (
    <section className='sm:mx-6 lg:mx-8'>
      <div className='w-full px-4 py-4 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center py-8 text-3xl'>
          <Title text1={'COLEÇÃO DE'} text2={'PRODUTOS'} />
          <p className='w-full md:w-2/3 mx-auto text-xs sm:text-sm md:text-base text-gray-600 line-clamp-3'>
            Explore nossa Coleção de Produtos, uma seleção de acessórios de surf
            de alta qualidade, projetados para desempenho, durabilidade e
            inovação dentro e fora d’água.
          </p>
        </header>

        <ul className='mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map(product => (
            <li
              key={product.category}
              onClick={() => handleNavigate(product.category)}
              onKeyDown={e =>
                e.key === 'Enter' && handleNavigate(product.category)
              }
              role='button'
              tabIndex={0}
              className='group block relative overflow-hidden cursor-pointer'
            >
              <img
                src={product.img}
                alt={product.category}
                className='h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px] lg:h-[400px]'
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50'>
                <span className='text-white text-xl sm:text-3xl lg:text-4xl font-bold transition-transform duration-500 group-hover:scale-110'>
                  {product.category.toUpperCase()}
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
