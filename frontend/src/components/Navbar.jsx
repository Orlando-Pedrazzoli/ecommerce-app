import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  // Updated: Pass both category and subCategory (optional)
  const handleCategoryNavigate = (category, subCategory = null) => {
    navigate('/collection', {
      state: { category, subCategory },
    });
  };

  return (
    <div className='w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] py-5'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img
            src={assets.logo}
            className='mx-auto sm:mx-0 mt mb-5 w-24 sm:w-32 md:w-35'
            alt='Logo'
          />
        </Link>

        {/* Navigation Links */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>INÍCIO</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          {/* Collection Dropdown */}
          <div className='group relative'>
            <NavLink
              to='/collection'
              className='flex flex-col items-center gap-1'
            >
              <p>COLEÇÃO</p>
              {/* Show underline on hover */}
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block' />
            </NavLink>
            <div className='absolute left-1/2 transform -translate-x-1/2 top-full hidden group-hover:block bg-white shadow-lg w-[1200px] p-6 rounded-md z-50'>
              <div className='grid grid-cols-5 gap-6 justify-items-center'>
                {/* Category 1 - DECKS */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.dropdown1}
                    alt='Leash'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Decks')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2 hover:text-blue-500'
                  >
                    DECKS
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Decks SUP')}
                    className='font-semibold text-gray-800 text-center cursor-pointer hover:text-blue-500'
                  >
                    STAND UP DECKS
                  </h3>
                </div>

                {/* Category 2 - LEASHES */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.dropdown2}
                    alt='Traction'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Leash Nó')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2 hover:text-blue-500'
                  >
                    LEASH NÓ
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Leash Premium')}
                    className='font-semibold text-gray-800 text-center cursor-pointer hover:text-blue-500'
                  >
                    LEASH PREMIUM
                  </h3>
                </div>

                {/* Category 3 - CAPAS */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.dropdown3}
                    alt='Traction'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Capa Combate')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2 hover:text-blue-500'
                  >
                    CAPAS COMBATE
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Capa Premium')}
                    className='font-semibold text-gray-800 text-center cursor-pointer hover:text-blue-500'
                  >
                    CAPAS PREMIUM
                  </h3>
                </div>

                {/* Category 4 - ACESSÓRIOS */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.dropdown4}
                    alt='Shop by Collection'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Capa Toalha')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2 hover:text-blue-500'
                  >
                    CAPA TOALHA/TECIDO
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Acessórios')}
                    className='font-semibold text-gray-800 text-center cursor-pointer hover:text-blue-500'
                  >
                    ACESSÓRIOS
                  </h3>
                </div>

                {/* Category 5 - SARCÓFAGOS */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.dropdown5}
                    alt='Shop by Collection'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Sarcófagos')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2 hover:text-blue-500'
                  >
                    SARCÓFAGOS
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Sarcófagos/Rodas')}
                    className='font-semibold text-gray-800 text-center cursor-pointer hover:text-blue-500'
                  >
                    SARCÓFAGOS C/RODAS
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>SOBRE NÓS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>POLÍTICA COMERCIAL</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-6'>
          <img
            onClick={() => {
              setShowSearch(true);
              navigate('/collection');
            }}
            src={assets.search_icon}
            className='w-5 cursor-pointer'
            alt='Search'
          />
          <div className='group relative'>
            <img
              onClick={() => (token ? null : navigate('/login'))}
              className='w-5 cursor-pointer'
              src={assets.profile_icon}
              alt='Profile Icon'
            />
            {token && (
              <div className='hidden group-hover:block absolute right-0 pt-4 z-50'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg'>
                  <p
                    onClick={() => navigate('/profile')}
                    className='cursor-pointer hover:text-black'
                  >
                    Meu Perfil
                  </p>
                  <p
                    onClick={() => navigate('/orders')}
                    className='cursor-pointer hover:text-black'
                  >
                    Meus Pedidos
                  </p>
                  <p
                    onClick={logout}
                    className='cursor-pointer hover:text-black'
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt='Menu'
          />
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        } z-50`}
      >
        <div className='flex flex-col text-gray-600'>
          <div
            onClick={() => setVisible(false)}
            className='flex items-center gap-4 p-3 cursor-pointer'
          >
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/'
          >
            INÍCIO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/collection'
          >
            COLEÇÃO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/about'
          >
            SOBRE NÓS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/contact'
          >
            POLÍTICA COMERCIAL
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
