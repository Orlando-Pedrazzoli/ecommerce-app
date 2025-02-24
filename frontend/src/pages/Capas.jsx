import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Title from '../components/Title';

const Capas = () => {
  const navigate = useNavigate(); // Hook para navegação
  useEffect(() => {
    window.scrollTo(0, 0); // Sempre rola para o topo ao carregar a página
  }, []);

  // Array de categorias com IDs e URLs das imagens
  const categories = [
    {
      id: '7',
      name: 'Capa Combate',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740401181/15167350052_15159219421_7694233351_7684721574_7382493188_IMG_2603_vplp1o.jpg',
    },
    {
      id: '8',
      name: 'Capa Premium',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740401396/15159219718_7694178719_7661159757_7384660030_IMG_2638_xz8yzl.jpg',
    },
    {
      id: '9',
      name: 'Capa Térmica',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740401584/15313959811-capa-para-prancha-de-surf-termica-premium-fish_taahbs.jpg',
    },
    {
      id: '10',
      name: 'Capa Stand Up',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740401781/capa-para-stand-up-paddle-sup-refletiva-premium_vzbali.jpg',
    },
    {
      id: '11',
      name: 'Capa Toalha',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740401934/evo_laranja_tykgba.jpg',
    },
    {
      id: '12',
      name: 'Sarcófagos',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740402062/15159214453_7749594016_CAPASARCOFAGO-edit-510x453_xsit4k.jpg',
    },
    {
      id: '13',
      name: 'Sarcófagos/Rodas',
      imageUrl:
        'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1740402211/15166127437_7749584346_CAPASARCOFAGORODAS-edit_mttuaa.jpg',
    },
  ];

  // Função para redirecionar para a coleção com o ID da categoria
  const handleImageClick = categoryId => {
    navigate('/collection', {
      state: { categoryId: categoryId },
    });
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4'>
        {/* Título da Página */}
        <header className='text-center'>
          <Title text1={'CAPAS'} text2={'COLEÇÃO 2025'} />
        </header>

        {/* Lista de Categorias */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          {categories.map(category => (
            <li key={category.id} className='w-full'>
              <div
                onClick={() => handleImageClick(category.id)}
                className='relative group cursor-pointer w-full'
              >
                {/* Garantindo um formato quadrado para a imagem */}
                <div className='relative w-full pb-[100%] overflow-hidden'>
                  <img
                    src={category.imageUrl}
                    alt=''
                    className='absolute top-0 left-0 w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Capas;
