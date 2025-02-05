import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
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
    setSearch(''); // Clear search input
    setShowSearch(false); // Hide search bar
  };

  const toggleSubCategory = e => {
    const value = e.target.value;
    setSubCategory(value); // Define a subcategoria quando clicada
    setSearch(''); // Clear search input
    setShowSearch(false); // Hide search bar
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Se houver uma busca ativa, filtrar pelo termo de pesquisa (nome ou cod)
    if (showSearch && search) {
      productsCopy = productsCopy.filter(
        item =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          (item.cod?.toLowerCase() || '').includes(search.toLowerCase())
      );
    } else {
      // Caso contrário, aplicar os filtros de categoria/subcategoria normalmente
      if (category.length > 0) {
        productsCopy = productsCopy.filter(item =>
          category.includes(item.category)
        );
      }

      if (subCategory) {
        productsCopy = productsCopy.filter(
          item => item.subCategory === subCategory
        );
      }
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts]; // Create a new array to avoid mutating state directly

    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting or default sorting
        break;
    }

    setFilterProducts(fpCopy); // Update state with the sorted array
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
          FILTRAR POR:
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
          <p className='mb-3 text-sm font-medium'>CATEGORIAS</p>

          {/* Renderização de Categorias */}
          {[
            {
              name: 'Decks',
              subCategories: [
                'Deck Saquarema',
                'Deck Saquarema Marine',
                'Deck Noronha',
                'Deck Noronha Marine',
                'Deck J-Bay',
                'Deck J-Bay Cnc',
                'Deck Fiji Classic',
                'Deck Fiji Cnc',
                'Deck Hawaii',
                'Deck Peniche',
                'Deck Tahiti',
                'Deck Frontal',
                'Deck Longboard',
              ],
            },
            {
              name: 'Decks SUP',
              subCategories: ['Deck StandUp'],
            },
            {
              name: 'Leash Premium',
              subCategories: [
                'Super Comp (6"x 5mm)',
                'Competição (6"x 6mm)',
                'Regular (6.6"x 7mm)',
                'Pipeline (8"x 7mm)',
                'Long Tornozelo (9"x 7mm)',
                'Long Calf Knee (9"x 7mm)',
                'Longboard (10"x 7mm)',
                'StandUp (10"x 8mm)',
                'StandUp Espiral (7mm)',
                'Bodyboard (6mm)',
              ],
            },
            {
              name: 'Leash Nó',
              subCategories: [
                'Super Comp (6"x 5mm)',
                'Competição (6"x 6mm)',
                'Regular (6.6"x 7mm)',
                'Pipeline (8"x 7mm)',
                'Long Calf Knee (9"x 7mm)',
                'Longboard (10"x 7mm)',
                'StandUp (10"x 8mm)',
                'StandUp Espiral (7mm)',
                'Bodyboard (6mm)',
              ],
            },
            {
              name: 'Capa Combate',
              subCategories: [
                'Refletiva Fish & Evolution 5`10',
                'Refletiva Fish & Evolution 6`2',
                'Refletiva Fish & Evolution 6`4',
                'Refletiva Fish & Evolution 6`8',
                'Refletiva Fish & Evolution 7`2',
                'Refletiva short 5`10',
                'Refletiva short 6`0',
                'Refletiva short 6`3',
                'Refletiva short 6`6',
                'Refletiva Funboard 7`2',
                'Refletiva Funboard 7`6',
                'Refletiva Funboard 8`0',
                'Refletiva Minilong 7`0',
                'Refletiva Minilong 8`0',
                'Refletiva Longboard 9`2',
                'Refletiva Longboard 9`6',
                'Refletiva Longboard 10`',
              ],
            },
            {
              name: 'Capa Premium',
              subCategories: [
                'Refletiva Premium Mini Simmons 6`0',
                'Refletiva Fish & Evolution 5`10',
                'Refletiva Fish & Evolution 6`2',
                'Refletiva Fish & Evolution 6`4',
                'Refletiva Fish & Evolution 6`8',
                'Refletiva Fish & Evolution 7`2',
                'Refletiva short 5`10',
                'Refletiva short 6`0',
                'Refletiva short 6`3',
                'Refletiva short 6`6',
                'Refletiva Funboard 7`2',
                'Refletiva Funboard 7`6',
                'Refletiva Funboard 8`0',
                'Refletiva Minilong 7`0',
                'Refletiva Minilong 8`0',
                'Refletiva Longboard 9`2',
                'Refletiva Longboard 9`6',
                'Refletiva Longboard 10`',
                'Refletiva Bodyboard`',
              ],
            },
            {
              name: 'Capa Stand Up',
              subCategories: [
                'Refletiva SUP Remo',
                'Refletiva SUP Wave 8`5',
                'Refletiva SUP Wave 9`0',
                'Refletiva SUP 9`2',
                'Refletiva SUP 9`6',
                'Refletiva SUP 10`',
                'Refletiva SUP 10`5',
                'Refletiva SUP 11`',
                'Refletiva SUP 11`6',
                'Refletiva SUP RACE 12`6',
                'Refletiva SUP RACE 14`',
              ],
            },
            {
              name: 'Capa Toalha',
              subCategories: [
                'Toalha Fish 5`10-6`0',
                'Toalha Fish 6`1-6`4',
                'Toalha Short 5`10-6`0',
                'Toalha Short 6`1-6`4',
                'Toalha Short 6`5-6`8',
                'Toalha Fun 7`2-7`5',
                'Toalha Long 9`2-9`5',
              ],
            },
            {
              name: 'Sarcófagos',
              subCategories: [
                'Sarcófago Dupla 6`3',
                'Sarcófago Dupla 6`6',
                'Sarcófago Dupla 7`0',
                'Sarcófago Tripla 6`3',
                'Sarcófago Tripla 6`6',
                'Sarcófago Tripla 7`0',
                'Sarcófago Tripla 8`0',
                'Sarcófago Quadrupla 6`8',
                'Sarcófago Quadrupla 7`2',
                'Sarcófago Longboard Dupla',
                'Sarcófago Longboard Tripla',
              ],
            },
            {
              name: 'Sarcófagos/Rodas',
              subCategories: [
                'Sarcófago Tripla 6`3 Com Rodas',
                'Sarcófago Tripla 6`6 Com Rodas',
                'Sarcófago Tripla 7`0 Com Rodas',
                'Sarcófago Tripla 8`0 Com Rodas',
                'Sarcófago Quadrupla 6`8 Com Rodas',
                'Sarcófago Quadrupla 7`2 Com Rodas',
                'Sarcófago Longboard Dupla Com Rodas',
                'Sarcófago Longboard Tripla Com Rodas',
              ],
            },
            {
              name: 'Acessórios',
              subCategories: [
                'Alça Sup',
                'Racks Bastão 65cm',
                'Racks Bastão 90cm',
                'Fita Rack (5M par)',
                'Fita Rack P/B (5M par)',
                'Fita Rack Azul (5M par)',
                'Fita Rack (8M)',
                'Protetor Eva Squash',
                'Protetor Eva Round',
                'Protetor Eva Swallow',
                'Wetsuit Bag',
              ],
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
