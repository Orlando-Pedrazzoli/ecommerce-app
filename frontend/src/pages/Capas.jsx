import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';

// Categories data (moved outside the component to avoid re-rendering)
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

// CategoryItem Component
const CategoryItem = ({ category, onClick }) => (
  <li className='w-full'>
    <div
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      role='button'
      tabIndex='0'
      aria-label={`View ${category.name}`}
      className='relative group cursor-pointer w-full'
    >
      <div className='relative w-full pb-[100%] overflow-hidden'>
        <img
          src={category.imageUrl}
          alt={category.name}
          className='absolute top-0 left-0 w-full h-full object-cover'
          onError={e => {
            e.target.onerror = null;
            e.target.src = '/images/default-cover.jpg';
          }}
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300'>
          <h3 className='text-xl sm:text-xl md:text-2xl lg:text-2xl text-white text-center font-semibold'>
            {category.name}
          </h3>
        </div>
      </div>
    </div>
  </li>
);

CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const Capas = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = categories.map(category => {
        const img = new Image();
        img.src = category.imageUrl;
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  // Handle image click with full page refresh
  const handleImageClick = categoryId => {
    // Store selection in localStorage
    localStorage.setItem('selectedCategory', categoryId);

    // Force full page refresh with URL parameter
    window.location.href = `/collection?category=${categoryId}`;
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 sm:px-[5vw] md:px-[9vw] lg:px-[9vw] py-8 sm:py-12'>
        <header className='text-center'>
          <Title text1={'CAPAS'} text2={'COLEÇÃO 2025'} />
        </header>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-12 mt-10'>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              category={category}
              onClick={() => handleImageClick(category.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Capas;
