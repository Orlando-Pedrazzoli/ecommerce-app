import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const reviews = [
  {
    id: 1,
    name: 'André Oliveira Granha',
    date: '14/01/2025',
    comment:
      'Finalmente um sistema que entende as necessidades dos distribuidores! O processo de pedidos é extremamente rápido e intuitivo. Em poucos cliques, consigo repor meu estoque sem complicação. A navegação é fluida, e a organização dos produtos facilita muito a compra.',
  },
  {
    id: 2,
    name: 'Amaury Fonseca',
    date: '22/01/2025',
    comment:
      'O e-commerce superou minhas expectativas. O catálogo é muito bem estruturado, com imagens nítidas e informações detalhadas dos produtos. Isso evita erros nos pedidos e agiliza a tomada de decisão. Além disso, a busca por categorias e subcategorias torna tudo mais prático.',
  },
  {
    id: 3,
    name: 'José Francisco',
    date: '03/02/2025',
    comment:
      'Além da plataforma ser eficiente, o suporte é excelente! Sempre que tenho dúvidas, sou atendido rapidamente. A integração com nosso sistema de gestão também foi simples, tornando a conferência de pedidos mais ágil e reduzindo erros operacionais.',
  },
  {
    id: 4,
    name: 'Pedro Ramos',
    date: '11/02/2025',
    comment:
      'O sistema oferece um controle incrível sobre os pedidos. Consigo acompanhar o status em tempo real e prever melhor meus prazos de entrega. Isso faz toda a diferença para a organização do meu estoque e atendimento aos meus clientes.',
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
