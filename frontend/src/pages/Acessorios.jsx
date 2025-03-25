import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';

const categoriesWithIds = [
  {
    id: '14',
    name: 'Acessórios',
    subCategories: [
      {
        id: '14.1',
        name: 'Alça Sup',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098355/cczif4vtspabaxt3zw16.jpg',
      },
      {
        id: '14.2',
        name: 'Racks Bastão 65cm',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738099927/g3u2yqc17u39zjdsyq60.jpg',
      },
      {
        id: '14.3',
        name: 'Racks Bastão 90cm',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738100384/qr1lwwl2uy13iz9rclsj.jpg',
      },
      {
        id: '14.4',
        name: 'Fita Rack (5M par)',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738102127/tuekr12daspy0isbpojm.jpg',
      },
      {
        id: '14.5',
        name: 'Fita Rack P/B (5M par)',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101859/ksdydh1zulkuebmfsgmz.jpg',
      },
      {
        id: '14.6',
        name: 'Fita Rack Azul (5M par)',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101980/phxngokw9mfow9hbpusc.jpg',
      },
      {
        id: '14.7',
        name: 'Fita Rack (8M)',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738101702/pckn1upfrsvjvcu9bupn.jpg',
      },
      {
        id: '14.8',
        name: 'Protetor Eva Squash',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098956/dm3ba8m10p2jg3etoepi.jpg',
      },
      {
        id: '14.9',
        name: 'Protetor Eva Round',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098888/wq1qwtjatqpnnrhe1x1k.jpg',
      },
      {
        id: '14.10',
        name: 'Protetor Eva Swallow',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738098810/hpvg9o0o6xzaxzdyaooq.jpg',
      },
      {
        id: '14.11',
        name: 'Wetsuit Bag',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1738099284/saozjw5kxbpkhohexjwx.jpg',
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
            e.target.src = '/images/default-accessory.jpg';
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

const Acessorios = () => {
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

export default Acessorios;
