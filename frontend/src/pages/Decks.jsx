import React, { useEffect } from 'react';
import Title from '../components/Title';

// Categories data
const categoriesWithIds = [
  {
    id: '1',
    name: 'Decks Fresados',
    subCategories: [
      {
        id: '1.1',
        name: 'Deck Saquarema',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734099253/q0czusipe72xnqcrriew.jpg',
      },
      {
        id: '1.2',
        name: 'Deck Noronha',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734650738/pqcz3d3slxajjqt2h2so.jpg',
      },
      {
        id: '1.3',
        name: 'Deck J-Bay',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739394981/DECK_J-BAY_CINZA1_fpsbkk.jpg',
      },
      {
        id: '1.4',
        name: 'Deck Fiji Classic',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718145/FIJI_CLASSIC_PRETO-BRANCOnew_yqz9uo.jpg',
      },
      {
        id: '1.5',
        name: 'Deck Hawaii',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739370069/DECK_HAWAII_VERDEmusgo_gsiwat.jpg',
      },
      {
        id: '1.10',
        name: 'Deck Hawaii Grom',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1742942337/ntlcxpekoyjtytyff61s.jpg',
      },
      {
        id: '1.6',
        name: 'Deck Peniche',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739598118/DECK_PENICHE_PRETO-VERDEnew_rolwan.jpg',
      },
      {
        id: '1.7',
        name: 'Deck Tahiti',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732629510/apx7m5o4flwpvw2n9djo.jpg',
      },
      {
        id: '1.8',
        name: 'Deck Frontal',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732628376/mq2bhv9imueyiwkarbvt.jpg',
      },
      {
        id: '1.9',
        name: 'Deck Longboard',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1732572321/gmwbltgsc8bgw2wq70hi.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Decks CNC',
    subCategories: [
      {
        id: '2.1',
        name: 'Deck J-Bay Cnc',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739718252/DECK_J-BAY_CNC_PRETO-BRANCO1_fqgdep.jpg',
      },
      {
        id: '2.2',
        name: 'Deck Fiji Cnc',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1739793749/FIJI_CNC_PRETO-AZUL2_adhbzr.jpg',
      },
    ],
  },
  {
    id: '3',
    name: 'Decks Marine',
    subCategories: [
      {
        id: '3.1',
        name: 'Deck Saquarema Marine',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734096576/etpcmbrjvhpl33jmrxeq.jpg',
      },
      {
        id: '3.2',
        name: 'Deck Noronha Marine',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1734119557/wavghckwtxiueopfzpcy.jpg',
      },
    ],
  },
  {
    id: '4',
    name: 'Decks SUP',
    subCategories: [
      {
        id: '4.1',
        name: 'Deck StandUp',
        imageUrl:
          'https://res.cloudinary.com/dy2cjyhp6/image/upload/v1735856062/znaidq8k2p7hkzdda3f2.jpg',
      },
    ],
  },
];

// SubCategory Component
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
            e.target.src = '/images/default-deck.jpg';
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

const Decks = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle image click to navigate to the collection page with full refresh
  const handleImageClick = (categoryId, subCategoryId) => {
    // Store the selection in localStorage
    localStorage.setItem('selectedCategory', categoryId);
    localStorage.setItem('selectedSubCategory', subCategoryId);

    // Force full page refresh with URL parameters
    window.location.href = `/collection?category=${categoryId}&subcategory=${subCategoryId}`;
  };

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

export default Decks;
