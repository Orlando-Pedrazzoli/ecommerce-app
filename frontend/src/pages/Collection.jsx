import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = e => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = e => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>
        {/* --------- CATEGORIA CAPAS ------ */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Capas'}
                onChange={toggleCategory}
              />{' '}
              Capas
            </p>
            <p className='text-sm font-medium'>TYPE</p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'RefletivaCombate'}
                onChange={toggleSubCategory}
              />
              Refletiva Combate
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'RefletivaPremium'}
                onChange={toggleSubCategory}
              />
              Refletiva Premium
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'RefletivaTermica'}
                onChange={toggleSubCategory}
              />
              Refletiva Térmica
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'CapaToalha'}
                onChange={toggleSubCategory}
              />
              Toalha
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Sarcofago'}
                onChange={toggleSubCategory}
              />
              Sarcófago
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'CapaSkate'}
                onChange={toggleSubCategory}
              />
              Skate
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          {/* --------- CATEGORIA DECKS ------ */}
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Decks'}
                onChange={toggleCategory}
              />{' '}
              Decks
            </p>
            <p className='text-sm font-medium'>TYPE</p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckSaquarema'}
                onChange={toggleSubCategory}
              />
              Saquarema
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckNoronha'}
                onChange={toggleSubCategory}
              />
              Noronha
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckJBay'}
                onChange={toggleSubCategory}
              />
              J-Bay
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckFiji'}
                onChange={toggleSubCategory}
              />
              Fiji
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckHawaii'}
                onChange={toggleSubCategory}
              />
              Hawaii
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckPeniche'}
                onChange={toggleSubCategory}
              />
              Peniche
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckTrestles'}
                onChange={toggleSubCategory}
              />
              Trestles
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckIndonesia'}
                onChange={toggleSubCategory}
              />
              Indonésia
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckTahiti'}
                onChange={toggleSubCategory}
              />
              Tahiti
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckLongboard'}
                onChange={toggleSubCategory}
              />
              Longboard
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'DeckStandUp'}
                onChange={toggleSubCategory}
              />
              Stand Up
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          {/* --------- CATEGORIA LEASHES ------ */}
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashPremium'}
                onChange={toggleCategory}
              />{' '}
              Leash Injetado Premium
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashInjetado'}
                onChange={toggleCategory}
              />{' '}
              Leash Injetado
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashNo'}
                onChange={toggleCategory}
              />{' '}
              Leash Nó
            </p>
            <p className='text-sm font-medium'>TYPE</p>
            {/*---- SubCategory ------ */}
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashSuperComp'}
                onChange={toggleSubCategory}
              />
              Super Comp 6" x 5mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashCompetição'}
                onChange={toggleSubCategory}
              />
              Competição 6" x 6mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashRegular'}
                onChange={toggleSubCategory}
              />
              Regular 7" x 7mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashPipeline'}
                onChange={toggleSubCategory}
              />
              Pipeline 8" x 7mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashLongTornozelo'}
                onChange={toggleSubCategory}
              />
              Long. Tornoz. 9" x 7mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashLongCalfKnee'}
                onChange={toggleSubCategory}
              />
              Long. Calf Knee 9" x 7mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashLongboard'}
                onChange={toggleSubCategory}
              />
              Longboard 10" x 7mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashStandUp'}
                onChange={toggleSubCategory}
              />
              Stand Up 10" x 8mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashStandUpEspiral'}
                onChange={toggleSubCategory}
              />
              Stand Up Espiral 8mm
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'LeashBody'}
                onChange={toggleSubCategory}
              />
              Bodyboard Espiral 6mm
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Acessorios'}
                onChange={toggleCategory}
              />
              Acessórios
            </p>
            <p className='text-sm font-medium'>TYPE</p>
            {/*---- SubCategory ------ */}
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Racks'}
                onChange={toggleSubCategory}
              />
              Racks
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'ProtetorEva'}
                onChange={toggleSubCategory}
              />
              Protetor E.V.A
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'WetsuitBag'}
                onChange={toggleSubCategory}
              />
              Wetsuit Bag
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Porduct Sort */}
          <select
            onChange={e => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
