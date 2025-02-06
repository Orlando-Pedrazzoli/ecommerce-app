import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const reviews = [
  {
    id: 1,
    name: 'Olga M.',
    date: '22/01/2025',
    comment: 'Excelente experiência. foi muito solícita em tudo o que...',
  },
  {
    id: 2,
    name: 'Alex S.',
    date: '22/01/2025',
    comment: 'Muito bom',
  },
  {
    id: 3,
    name: 'Victor C.',
    date: '17/01/2025',
    comment: 'Foi ótima!',
  },
  {
    id: 4,
    name: 'Alexandre V.',
    date: '14/01/2025',
    comment: 'Ótimo atendimento e negociação',
  },
];

const Review = () => {
  return (
    <div className='mt-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-white text-center space-y-16'>
      <Title text1={'AVALIAÇÕES'} text2={'CLIENTES'} />

      {/* Grid responsivo */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {reviews.map(review => (
          <div
            key={review.id}
            className='bg-gray-200 p-6 rounded-lg shadow-md text-center'
          >
            <p className='text-gray-800 italic mb-3'>"{review.comment}"</p>
            <p className='font-semibold'>{review.name}</p>
            <p className='text-sm text-gray-500 mb-3'>
              Avaliada em {review.date}
            </p>

            {/* Estrelas fixas com cor amarela */}
            <div className='flex justify-center'>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon} // Certifique-se de que esta imagem é a estrela amarela
                  alt='star'
                  className='w-5 h-5'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
