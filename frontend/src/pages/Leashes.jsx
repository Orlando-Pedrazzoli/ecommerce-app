import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Title from '../components/Title';

const Leashes = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Array de categorias e subcategorias com IDs
  const categoriesWithIds = [
    {
      id: '5',
      name: 'Leash Premium',
      subCategories: [
        { id: '5.1', name: 'Super Comp (6"x 5mm)' },
        { id: '5.2', name: 'Competição (6"x 6mm)' },
        { id: '5.3', name: 'Regular (6.6"x 7mm)' },
        { id: '5.4', name: 'Pipeline (8"x 7mm)' },
        { id: '5.5', name: 'Long Tornozelo (9"x 7mm)' },
        { id: '5.6', name: 'Long Calf Knee (9"x 7mm)' },
        { id: '5.7', name: 'Longboard (10"x 7mm)' },
        { id: '5.8', name: 'StandUp (10"x 8mm)' },
        { id: '5.9', name: 'StandUp Espiral (7mm)' },
        { id: '5.10', name: 'Bodyboard (6mm)' },
      ],
    },
    {
      id: '6',
      name: 'Leash Nó',
      subCategories: [
        { id: '6.1', name: 'Super Comp (6"x 5mm)' },
        { id: '6.2', name: 'Competição (6"x 6mm)' },
        { id: '6.3', name: 'Regular (6.6"x 7mm)' },
        { id: '6.4', name: 'Pipeline (8"x 7mm)' },
        { id: '6.5', name: 'Long Calf Knee (9"x 7mm)' },
        { id: '6.6', name: 'Longboard (10"x 7mm)' },
        { id: '6.7', name: 'StandUp (10"x 8mm)' },
        { id: '6.8', name: 'StandUp Espiral (7mm)' },
        { id: '6.9', name: 'Bodyboard (6mm)' },
      ],
    },
  ];

  // Função para redirecionar para a coleção com o ID da subcategoria
  const handleImageClick = subCategoryName => {
    // Encontrar o ID da subcategoria com base no nome
    const subCategory = categoriesWithIds
      .flatMap(cat => cat.subCategories)
      .find(subCat => subCat.name === subCategoryName);

    if (subCategory) {
      navigate('/collection', { state: { subCategoryId: subCategory.id } });
    } else {
      console.error('Subcategoria não encontrada:', subCategoryName);
    }
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-4'>
        <header className='text-center'>
          <Title text1={'LEASHES PREMIUM'} text2={'COLEÇÃO 2025'} />

          <p className='mx-auto mt-4 max-w-md text-gray-500'></p>
        </header>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          <li>
            <div
              onClick={() => handleImageClick('Super Comp (6"x 5mm)')} // Passa o nome da subcategoria
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  SUPER COMP <br /> 6' X 5mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734099253/q0czusipe72xnqcrriew.jpg'
                alt=''
                className='h-[300px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Competição (6"x 6mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  COMPETIÇÃO <br /> 6' X 6mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734650738/pqcz3d3slxajjqt2h2so.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Regular (6.6"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  REGULAR <br /> 7' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739394981/DECK_J-BAY_CINZA1_fpsbkk.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Pipeline (8"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  PIPELINE <br /> 8' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718145/FIJI_CLASSIC_PRETO-BRANCOnew_yqz9uo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Long Tornozelo (9"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONG TORNOZELO <br /> 9' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739370069/DECK_HAWAII_VERDEmusgo_gsiwat.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Long Calf Knee (9"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONG CALF KNEE <br /> 9' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739598118/DECK_PENICHE_PRETO-VERDEnew_rolwan.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Longboard (10"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONGBOARD <br /> 10' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732629510/apx7m5o4flwpvw2n9djo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('StandUp (10"x 8mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  STAND UP <br /> 10' X 8mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732572321/gmwbltgsc8bgw2wq70hi.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('StandUp Espiral (7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  STAND UP ESPIRAL <br /> 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732628376/mq2bhv9imueyiwkarbvt.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Bodyboard (6mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  BODYBOARD <br /> 6mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718252/DECK_J-BAY_CNC_PRETO-BRANCO1_fqgdep.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
        </ul>
        <header className='text-center mt-12'>
          <Title text1={'LEASHES NÓ'} text2={'COLEÇÃO 2025'} />

          <p className='mx-auto mt-4 max-w-md text-gray-500'></p>
        </header>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          <li>
            <div
              onClick={() => handleImageClick('Super Comp (6"x 5mm)')} // Passa o nome da subcategoria
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  SUPER COMP <br /> 6' X 5mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734099253/q0czusipe72xnqcrriew.jpg'
                alt=''
                className='h-[300px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Competição (6"x 6mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  COMPETIÇÃO <br /> 6' X 6mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734650738/pqcz3d3slxajjqt2h2so.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Regular (6.6"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  REGULAR <br /> 7' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739394981/DECK_J-BAY_CINZA1_fpsbkk.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Pipeline (8"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  PIPELINE <br /> 8' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718145/FIJI_CLASSIC_PRETO-BRANCOnew_yqz9uo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Long Tornozelo (9"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONG TORNOZELO <br /> 9' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739370069/DECK_HAWAII_VERDEmusgo_gsiwat.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Long Calf Knee (9"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONG CALF KNEE <br /> 9' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739598118/DECK_PENICHE_PRETO-VERDEnew_rolwan.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Longboard (10"x 7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  LONGBOARD <br /> 10' X 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732629510/apx7m5o4flwpvw2n9djo.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('StandUp (10"x 8mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  STAND UP <br /> 10' X 8mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732572321/gmwbltgsc8bgw2wq70hi.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('StandUp Espiral (7mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  STAND UP ESPIRAL <br /> 7mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732628376/mq2bhv9imueyiwkarbvt.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleImageClick('Bodyboard (6mm)')}
              className='relative block overflow-hidden group cursor-pointer'
            >
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 transition duration-300 group-hover:bg-black/20'>
                <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold'>
                  BODYBOARD <br /> 6mm
                </h3>
              </div>
              <img
                src='https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718252/DECK_J-BAY_CNC_PRETO-BRANCO1_fqgdep.jpg'
                alt=''
                className='h-[300px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-full object-cover'
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Leashes;
