import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState(null); // Subcategoria começa como null
  const [sortType, setSortType] = useState('relavent');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Configurar categorias e subcategorias iniciais com base no estado recebido
  useEffect(() => {
    if (location.state?.category) {
      setCategory([location.state.category]); // Define a categoria
      setExpandedCategories(prev => ({
        ...prev,
        [location.state.category]: true, // Expande a categoria
      }));
    }
    if (location.state?.subCategory) {
      setSubCategory(location.state.subCategory); // Define a subcategoria se existirem
    }
  }, [location.state]);

  // Função para alternar a categoria principal e mostrar/ocultar subcategorias
  const toggleCategory = e => {
    const value = e.target.value;

    // Fechar outras categorias e desmarcar checkboxes
    const newExpandedCategories = {};
    setCategory([value]); // Seleciona apenas a nova categoria

    // Abrir a categoria clicada e fechar as outras
    newExpandedCategories[value] = !expandedCategories[value];

    // Atualiza o estado de expandedCategories
    setExpandedCategories(newExpandedCategories);
    setSubCategory(null); // Resetar subcategoria ao mudar de categoria
  };

  const toggleSubCategory = e => {
    const value = e.target.value;
    setSubCategory(value); // Define a subcategoria quando clicada
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filtro por busca
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtro por categoria
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    // Filtro por subcategoria se houver uma selecionada
    if (subCategory) {
      productsCopy = productsCopy.filter(
        item => item.subCategory === subCategory
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
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-6 lg:px-10'>
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

        {/* Categoria Capas */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          {/* Renderização de Categorias */}
          {[
            {
              name: 'Decks',
              subCategories: [
                'DeckSaquarema',
                'DeckNoronha',
                'DeckJ-Bay',
                'DeckJBayCnc',
                'DeckFijiClassic',
                'DeckFijiCnc',
                'DeckHawaii',
                'DeckPeniche',
                'DeckTahiti',
                'DeckCombate',
                'DeckFrontal',
                'DeckLongboard',
                'DeckStandUp',
              ],
            },
            {
              name: 'Leashes',
              subCategories: [
                'SuperComp',
                'Competição',
                'Regular',
                'Pipeline',
                'LongTornozelo',
                'LongCalfKnee',
                'Longboard',
                'StandUp',
                'StandUpEspiral',
                'Bodyboard',
              ],
            },
            {
              name: 'Capas',
              subCategories: [
                'Refletiva Combate',
                'Refletiva Premium',
                'Refletiva Termica',
                'CapaToalha',
                'Sarcofago',
                'CapaSkate',
              ],
            },
            {
              name: 'Acessórios',
              subCategories: ['Racks', 'ProtetorEva', 'WetsuitBag'],
            },
          ].map(cat => (
            <div key={cat.name}>
              <p className='flex gap-3 m-2 text-gray-900'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={cat.name}
                  checked={category.includes(cat.name)}
                  onChange={toggleCategory}
                />
                {cat.name}
              </p>
              {expandedCategories[cat.name] && (
                <div className='pl-4 text-sm text-gray-600'>
                  {cat.subCategories.map(subCat => (
                    <p key={subCat} className='flex gap-3 m-2'>
                      <input
                        className='w-3'
                        type='checkbox'
                        value={subCat}
                        checked={subCategory === subCat} // Verifica se é a subcategoria selecionada
                        onChange={toggleSubCategory}
                      />
                      {subCat}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select
            onChange={e => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 px-4 sm:px-6 md:px-8 lg:px-10'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              cod={item.cod}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
