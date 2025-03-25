import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';

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

const SubCategory = ({ subCat, onClick }) => (
  <li className='w-full'>
    <div
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      role='button'
      tabIndex='0'
      aria-label={`View ${subCat.name}`}
      className='relative group cursor-pointer w-full'
    >
      <div className='relative w-full pb-[100%] overflow-hidden'>
        <img
          src={subCat.imageUrl}
          alt={subCat.name}
          className='absolute top-0 left-0 w-full h-full object-cover'
          onError={e => {
            e.target.onerror = null;
            e.target.src = '/images/default-leash.jpg';
          }}
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300'>
          <h3 className='text-xl sm:text-xl md:text-2xl lg:text-2xl text-white text-center font-semibold'>
            {subCat.name}
          </h3>
        </div>
      </div>
    </div>
  </li>
);

SubCategory.propTypes = {
  subCat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Leashes = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = categoriesWithIds.flatMap(category =>
        category.subCategories.map(subCat => {
          const img = new Image();
          img.src = subCat.imageUrl;
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  // Handle image click with full page refresh
  const handleImageClick = (categoryId, subCategoryId) => {
    // Store selection in localStorage
    localStorage.setItem('selectedCategory', categoryId);
    localStorage.setItem('selectedSubCategory', subCategoryId);

    // Force full page refresh with URL parameters
    window.location.href = `/collection?category=${categoryId}&subcategory=${subCategoryId}`;
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 sm:px-[5vw] md:px-[9vw] lg:px-[9vw] py-8 sm:py-12 -mt-10'>
        {categoriesWithIds.map(category => (
          <div key={category.id}>
            <header className='text-center mt-10'>
              <Title
                text1={category.name.toUpperCase()}
                text2={'COLEÇÃO 2025'}
              />
            </header>

            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
              {category.subCategories.map(subCat => (
                <SubCategory
                  key={subCat.id}
                  subCat={subCat}
                  onClick={() => handleImageClick(category.id, subCat.id)}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leashes;
