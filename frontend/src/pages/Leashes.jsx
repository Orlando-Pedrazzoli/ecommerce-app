import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Title from '../components/Title';

const Leashes = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Array de categorias e subcategorias com IDs e URLs das imagens
  const categoriesWithIds = [
    {
      id: '5',
      name: 'Leash Premium',
      subCategories: [
        {
          id: '5.1',
          name: 'Super Comp (6"x 5mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736962106/o0uwzpmdnui6haz1guuk.jpg',
        },
        {
          id: '5.2',
          name: 'Competição (6"x 6mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736962279/adsktdvvoy4wrp0qrycd.jpg',
        },
        {
          id: '5.3',
          name: 'Regular (6.6"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736963261/odxtmzr7uotv41zovdan.jpg',
        },
        {
          id: '5.4',
          name: 'Pipeline (8"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736963383/essqei1ap606coxybyfs.jpg',
        },
        {
          id: '5.5',
          name: 'Long Tornozelo (9"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736963496/e9m4ump9fbsu5rrdhzch.jpg',
        },
        {
          id: '5.6',
          name: 'Long Calf Knee (9"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736891547/uvnldvtncleuyap5pjuh.png',
        },
        {
          id: '5.7',
          name: 'Longboard (10"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1736962106/o0uwzpmdnui6haz1guuk.jpg',
        },
        {
          id: '5.8',
          name: 'StandUp (10"x 8mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737038724/q4zvaqazcthvjebdwvq3.jpg',
        },
        {
          id: '5.9',
          name: 'StandUp Espiral (7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737039830/wei12ijfv4hvdvd3sym2.jpg',
        },
        {
          id: '5.10',
          name: 'Bodyboard (6mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737040708/opfdaolhutbbcrh2jwev.jpg',
        },
      ],
    },
    {
      id: '6',
      name: 'Leash Nó',
      subCategories: [
        {
          id: '6.1',
          name: 'Super Comp (6"x 5mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737034914/bacuub9ekin2jif1wljq.jpg',
        },
        {
          id: '6.2',
          name: 'Competição (6"x 6mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737035401/vlajyjopnzqab28k2ddq.jpg',
        },
        {
          id: '6.3',
          name: 'Regular (6.6"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737035564/lnkjifb1pbe4w4bmouzx.jpg',
        },
        {
          id: '6.4',
          name: 'Pipeline (8"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737035705/qkvizxnspcnux2quoyc3.jpg',
        },
        {
          id: '6.5',
          name: 'Long Calf Knee (9"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737035903/lf9bxw9jigkohmcwhxhn.jpg',
        },
        {
          id: '6.6',
          name: 'Longboard (10"x 7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737036280/xjx8iucdms1xndumv97v.jpg',
        },
        {
          id: '6.7',
          name: 'StandUp (10"x 8mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737036430/kilq01meyz0zdxogpjbq.jpg',
        },
        {
          id: '6.8',
          name: 'StandUp Espiral (7mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737036599/ytq0sxho0nli23t4pqcb.jpg',
        },
        {
          id: '6.9',
          name: 'Bodyboard (6mm)',
          imageUrl:
            'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1737037509/ivqwj5sdyleenr8zwzha.jpg',
        },
      ],
    },
  ];

  // Função para redirecionar para a coleção com o ID da categoria e subcategoria
  const handleImageClick = (categoryId, subCategoryName) => {
    // Encontrar a subcategoria com base no nome e na categoria
    const category = categoriesWithIds.find(cat => cat.id === categoryId);
    if (category) {
      const subCategory = category.subCategories.find(
        subCat => subCat.name === subCategoryName
      );
      if (subCategory) {
        navigate('/collection', {
          state: { categoryId: category.id, subCategoryId: subCategory.id },
        });
      } else {
        console.error('Subcategoria não encontrada:', subCategoryName);
      }
    } else {
      console.error('Categoria não encontrada:', categoryId);
    }
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4'>
        {/* Leash Premium */}
        <header className='text-center'>
          <Title text1={'LEASHES PREMIUM'} text2={'COLEÇÃO 2025'} />
          <p className='mx-auto mt-4 max-w-md text-gray-500'></p>
        </header>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          {categoriesWithIds[0].subCategories.map(subCat => (
            <li key={subCat.id}>
              <div
                onClick={() =>
                  handleImageClick(categoriesWithIds[0].id, subCat.name)
                }
                className='relative block overflow-hidden group cursor-pointer'
              >
                <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                  <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                    {subCat.name}
                  </h3>
                </div>
                <img
                  src={subCat.imageUrl} // Usando a URL da imagem da subcategoria
                  alt=''
                  className='h-[300px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover'
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Leash Nó */}
        <header className='text-center mt-12'>
          <Title text1={'LEASHES NÓ'} text2={'COLEÇÃO 2025'} />
          <p className='mx-auto mt-4 max-w-md text-gray-500'></p>
        </header>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          {categoriesWithIds[1].subCategories.map(subCat => (
            <li key={subCat.id}>
              <div
                onClick={() =>
                  handleImageClick(categoriesWithIds[1].id, subCat.name)
                }
                className='relative block overflow-hidden group cursor-pointer'
              >
                <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                  <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                    {subCat.name}
                  </h3>
                </div>
                <img
                  src={subCat.imageUrl} // Usando a URL da imagem da subcategoria
                  alt=''
                  className='h-[300px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover'
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Leashes;
