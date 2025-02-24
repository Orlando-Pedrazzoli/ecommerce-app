import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importe useLocation
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation(); // Hook para acessar o estado da navegação
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState(null);
  const [sortType, setSortType] = useState('relavent');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Ler o categoryId e subCategoryId do estado da navegação
  const { categoryId, subCategoryId } = location.state || {};

  // Aplicar o filtro da categoria e subcategoria ao carregar a página
  useEffect(() => {
    if (categoryId) {
      setCategory([categoryId]);
      setExpandedCategories({ [categoryId]: true });
    }
    if (subCategoryId) {
      setSubCategory(subCategoryId);
    }
  }, [categoryId, subCategoryId]);

  // Função para aplicar filtros
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(
        item =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          (item.cod?.toLowerCase() || '').includes(search.toLowerCase())
      );
    } else {
      if (category.length > 0) {
        const selectedCategory = categoriesWithIds.find(
          cat => cat.id === category[0]
        );
        if (selectedCategory) {
          productsCopy = productsCopy.filter(
            item => item.category === selectedCategory.name
          );
        }
      }

      if (subCategory) {
        const selectedSubCategory = categoriesWithIds
          .flatMap(cat => cat.subCategories)
          .find(subCat => subCat.id === subCategory);
        if (selectedSubCategory) {
          productsCopy = productsCopy.filter(
            item => item.subCategory === selectedSubCategory.name
          );
        }
      }
    }

    setFilterProducts(productsCopy);
  };

  // Aplicar filtros quando o estado mudar
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  // Função para ordenar produtos
  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(fpCopy);
  };

  // Ordenar produtos quando o tipo de ordenação mudar
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // Array de categorias e subcategorias com IDs
  const categoriesWithIds = [
    {
      id: '1',
      name: 'Decks Fresados',
      subCategories: [
        { id: '1.1', name: 'Deck Saquarema' },
        { id: '1.2', name: 'Deck Noronha' },
        { id: '1.3', name: 'Deck J-Bay' },
        { id: '1.4', name: 'Deck Fiji Classic' },
        { id: '1.5', name: 'Deck Hawaii' },
        { id: '1.6', name: 'Deck Peniche' },
        { id: '1.7', name: 'Deck Tahiti' },
        { id: '1.8', name: 'Deck Frontal' },
        { id: '1.9', name: 'Deck Longboard' },
      ],
    },
    {
      id: '2',
      name: 'Decks CNC',
      subCategories: [
        { id: '2.1', name: 'Deck J-Bay Cnc' },
        { id: '2.2', name: 'Deck Fiji Cnc' },
      ],
    },
    {
      id: '3',
      name: 'Decks Marine',
      subCategories: [
        { id: '3.1', name: 'Deck Saquarema Marine' },
        { id: '3.2', name: 'Deck Noronha Marine' },
      ],
    },
    {
      id: '4',
      name: 'Decks SUP',
      subCategories: [{ id: '4.1', name: 'Deck StandUp' }],
    },
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
    {
      id: '7',
      name: 'Capa Combate',
      subCategories: [
        { id: '7.1', name: 'Refletiva Fish & Evolution 5`10' },
        { id: '7.2', name: 'Refletiva Fish & Evolution 6`2' },
        { id: '7.3', name: 'Refletiva Fish & Evolution 6`4' },
        { id: '7.4', name: 'Refletiva Fish & Evolution 6`8' },
        { id: '7.5', name: 'Refletiva Fish & Evolution 7`2' },
        { id: '7.6', name: 'Refletiva short 5`10' },
        { id: '7.7', name: 'Refletiva short 6`0' },
        { id: '7.8', name: 'Refletiva short 6`3' },
        { id: '7.9', name: 'Refletiva short 6`6' },
        { id: '7.10', name: 'Refletiva Funboard 7`2' },
        { id: '7.11', name: 'Refletiva Funboard 7`6' },
        { id: '7.12', name: 'Refletiva Funboard 8`0' },
        { id: '7.13', name: 'Refletiva Minilong 7`0' },
        { id: '7.14', name: 'Refletiva Minilong 8`0' },
        { id: '7.15', name: 'Refletiva Longboard 9`2' },
        { id: '7.16', name: 'Refletiva Longboard 9`6' },
        { id: '7.17', name: 'Refletiva Longboard 10`' },
      ],
    },
    {
      id: '8',
      name: 'Capa Premium',
      subCategories: [
        { id: '8.1', name: 'Refletiva Premium Mini Simmons 6`0' },
        { id: '8.2', name: 'Refletiva Fish & Evolution 5`10' },
        { id: '8.3', name: 'Refletiva Fish & Evolution 6`2' },
        { id: '8.4', name: 'Refletiva Fish & Evolution 6`4' },
        { id: '8.5', name: 'Refletiva Fish & Evolution 6`8' },
        { id: '8.6', name: 'Refletiva Fish & Evolution 7`2' },
        { id: '8.7', name: 'Refletiva short 5`10' },
        { id: '8.8', name: 'Refletiva short 6`0' },
        { id: '8.9', name: 'Refletiva short 6`3' },
        { id: '8.10', name: 'Refletiva short 6`6' },
        { id: '8.11', name: 'Refletiva Funboard 7`2' },
        { id: '8.12', name: 'Refletiva Funboard 7`6' },
        { id: '8.13', name: 'Refletiva Funboard 8`0' },
        { id: '8.14', name: 'Refletiva Minilong 7`0' },
        { id: '8.15', name: 'Refletiva Minilong 8`0' },
        { id: '8.16', name: 'Refletiva Longboard 9`2' },
        { id: '8.17', name: 'Refletiva Longboard 9`6' },
        { id: '8.18', name: 'Refletiva Longboard 10`' },
        { id: '8.19', name: 'Refletiva Bodyboard`' },
      ],
    },
    {
      id: '9',
      name: 'Capa Térmica',
      subCategories: [
        { id: '9.1', name: 'Térmica Fish & Evolution 5`10' },
        { id: '9.2', name: 'Térmica Fish & Evolution 6`2' },
        { id: '9.3', name: 'Térmica short 5`10' },
        { id: '9.4', name: 'Térmica short 6`0' },
        { id: '9.5', name: 'Térmica short 6`3' },
        { id: '9.6', name: 'Térmica short 6`6' },
        { id: '9.7', name: 'Térmica Funboard 7`2' },
        { id: '9.8', name: 'Térmica Funboard 7`6' },
        { id: '9.9', name: 'Térmica Funboard 8`0' },
        { id: '9.10', name: 'Térmica Longboard 9`2' },
        { id: '9.11', name: 'Térmica Longboard 9`6' },
      ],
    },
    {
      id: '10',
      name: 'Capa Stand Up',
      subCategories: [
        { id: '10.1', name: 'Refletiva SUP Remo' },
        { id: '10.2', name: 'Refletiva SUP Wave 8`5' },
        { id: '10.3', name: 'Refletiva SUP Wave 9`0' },
        { id: '10.4', name: 'Refletiva SUP 9`2' },
        { id: '10.5', name: 'Refletiva SUP 9`6' },
        { id: '10.6', name: 'Refletiva SUP 10`' },
        { id: '10.7', name: 'Refletiva SUP 10`5' },
        { id: '10.8', name: 'Refletiva SUP 11`' },
        { id: '10.9', name: 'Refletiva SUP 11`6' },
        { id: '10.10', name: 'Refletiva SUP RACE 12`6' },
        { id: '10.11', name: 'Refletiva SUP RACE 14`' },
      ],
    },
    {
      id: '11',
      name: 'Capa Toalha',
      subCategories: [
        { id: '11.1', name: 'Toalha Fish 5`10-6`0' },
        { id: '11.2', name: 'Toalha Fish 6`1-6`4' },
        { id: '11.3', name: 'Toalha Short 5`10-6`0' },
        { id: '11.4', name: 'Toalha Short 6`1-6`4' },
        { id: '11.5', name: 'Toalha Short 6`5-6`8' },
        { id: '11.6', name: 'Toalha Fun 7`2-7`5' },
        { id: '11.7', name: 'Toalha Long 9`2-9`5' },
      ],
    },
    {
      id: '12',
      name: 'Sarcófagos',
      subCategories: [
        { id: '12.1', name: 'Sarcófago Dupla 6`3' },
        { id: '12.2', name: 'Sarcófago Dupla 6`6' },
        { id: '12.3', name: 'Sarcófago Dupla 7`0' },
        { id: '12.4', name: 'Sarcófago Tripla 6`3' },
        { id: '12.5', name: 'Sarcófago Tripla 6`6' },
        { id: '12.6', name: 'Sarcófago Tripla 7`0' },
        { id: '12.7', name: 'Sarcófago Tripla 8`0' },
        { id: '12.8', name: 'Sarcófago Quadrupla 6`8' },
        { id: '12.9', name: 'Sarcófago Quadrupla 7`2' },
        { id: '12.10', name: 'Sarcófago Longboard Dupla' },
        { id: '12.11', name: 'Sarcófago Longboard Tripla' },
      ],
    },
    {
      id: '13',
      name: 'Sarcófagos/Rodas',
      subCategories: [
        { id: '13.1', name: 'Sarcófago Tripla 6`3 Com Rodas' },
        { id: '13.2', name: 'Sarcófago Tripla 6`6 Com Rodas' },
        { id: '13.3', name: 'Sarcófago Tripla 7`0 Com Rodas' },
        { id: '13.4', name: 'Sarcófago Tripla 8`0 Com Rodas' },
        { id: '13.5', name: 'Sarcófago Quadrupla 6`8 Com Rodas' },
        { id: '13.6', name: 'Sarcófago Quadrupla 7`2 Com Rodas' },
        { id: '13.7', name: 'Sarcófago Longboard Dupla Com Rodas' },
        { id: '13.8', name: 'Sarcófago Longboard Tripla Com Rodas' },
      ],
    },
    {
      id: '14',
      name: 'Acessórios',
      subCategories: [
        { id: '14.1', name: 'Alça Sup' },
        { id: '14.2', name: 'Racks Bastão 65cm' },
        { id: '14.3', name: 'Racks Bastão 90cm' },
        { id: '14.4', name: 'Fita Rack (5M par)' },
        { id: '14.5', name: 'Fita Rack P/B (5M par)' },
        { id: '14.6', name: 'Fita Rack Azul (5M par)' },
        { id: '14.7', name: 'Fita Rack (8M)' },
        { id: '14.8', name: 'Protetor Eva Squash' },
        { id: '14.9', name: 'Protetor Eva Round' },
        { id: '14.10', name: 'Protetor Eva Swallow' },
        { id: '14.11', name: 'Wetsuit Bag' },
      ],
    },
  ];

  // Resetar estado ao desmontar o componente
  useEffect(() => {
    return () => {
      setCategory([]);
      setSubCategory(null);
      setExpandedCategories({});
      localStorage.removeItem('selectedCategory');
      localStorage.removeItem('selectedSubCategory');
    };
  }, []);

  // Função para alternar a categoria principal
  const toggleCategory = id => {
    if (category.includes(id)) {
      setCategory([]);
      setSubCategory(null);
      setExpandedCategories({});
    } else {
      setCategory([id]);
      setExpandedCategories({ [id]: true });
      setSubCategory(null);
    }
    setSearch('');
    setShowSearch(false);
  };

  // Função para alternar a subcategoria
  const toggleSubCategory = id => {
    if (subCategory === id) {
      setSubCategory(null);
    } else {
      setSubCategory(id);
    }
    setSearch('');
    setShowSearch(false);

    // Fechar o filtro ao selecionar uma subcategoria (apenas em mobile)
    if (window.innerWidth <= 640) {
      // 640px é o breakpoint para mobile (sm) no Tailwind
      setShowFilter(false);
    }
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-6 lg:px-10'>
      {/* Botão de Filtro para Mobile */}
      <div className='min-w-60'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md sm:bg-transparent sm:p-0'
          aria-expanded={showFilter}
          aria-label='Abrir ou fechar filtros'
        >
          FILTRAR
          <img
            className='h-3 sm:hidden'
            src={showFilter ? assets.cross_icon : assets.dropdown_icon}
            alt={showFilter ? 'Fechar Filtro' : 'Abrir Filtro'}
          />
        </button>

        {/* Filtros */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIAS</p>

          {/* Renderização de Categorias */}
          {categoriesWithIds.map(cat => (
            <div key={cat.id}>
              <p className='flex gap-3 m-2 text-gray-900'>
                <input
                  className='w-3 scale-125'
                  type='checkbox'
                  value={cat.id}
                  checked={category.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                {cat.name}
              </p>
              {expandedCategories[cat.id] && (
                <div className='pl-4 text-sm text-gray-600'>
                  {cat.subCategories.map(subCat => (
                    <p key={subCat.id} className='flex gap-3 m-2'>
                      <input
                        className='w-3 scale-110'
                        type='checkbox'
                        value={subCat.id}
                        checked={subCategory === subCat.id}
                        onChange={() => toggleSubCategory(subCat.id)}
                      />
                      {subCat.name}
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
          <Title text1={'COLEÇÃO'} text2={'2025'} />
          {/* Product Sort */}
          <select
            onChange={e => setSortType(e.target.value)}
            className='hidden sm:block border-2 border-gray-300 text-sm px-2 w-48'
          >
            <option value='relavent'>Ordenar por: Relevante</option>
            <option value='low-high'>Ordenar por: Menor preço</option>
            <option value='high-low'>Ordenar por: Maior preço</option>
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
