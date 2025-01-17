import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // Utilizando o hook de navegação

  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  // Função para navegação por categoria
  const handleCategoryNavigate = category => {
    navigate('/collection', {
      state: {
        category,
        subCategory: null, // Não seleciona subcategoria de início
      },
    });
  };

  return (
    <div className='w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] py-5'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img
            src={assets.logo}
            className='w-24 sm:w-30 md:w-32 lg:w-36 xl:w-38'
            alt='Logo'
          />
        </Link>

        {/* Navigation Links */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>

          {/* Collection Dropdown */}
          <div className='group relative'>
            <NavLink
              to='/collection'
              className='flex flex-col items-center gap-1'
            >
              <p>COLLECTION</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <div className='absolute left-1/2 transform -translate-x-1/2 top-full hidden group-hover:block bg-white shadow-lg w-[900px] p-6 rounded-md z-50'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center'>
                {/* Category 1 - DECKS */}
                <div
                  onClick={() => handleCategoryNavigate('Decks')}
                  className='flex flex-col items-center cursor-pointer'
                >
                  <img
                    src={assets.productCollection10}
                    alt='Leash'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3 className='font-semibold text-gray-800 text-center'>
                    DECKS
                  </h3>
                </div>

                {/* Category 2 - LEASHES */}
                <div className='flex flex-col items-center'>
                  <img
                    src={assets.productCollection11}
                    alt='Traction'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3
                    onClick={() => handleCategoryNavigate('Leash Nó')}
                    className='font-semibold text-gray-800 text-center cursor-pointer mb-2'
                  >
                    LEASH NÓ
                  </h3>
                  <h3
                    onClick={() => handleCategoryNavigate('Leash Premium')}
                    className='font-semibold text-gray-800 text-center cursor-pointer'
                  >
                    LEASH PREMIUM
                  </h3>
                </div>

                {/* Category 3 - CAPAS */}
                <div
                  onClick={() => handleCategoryNavigate('Capas')}
                  className='flex flex-col items-center cursor-pointer'
                >
                  <img
                    src={assets.productCollection9}
                    alt='Boardcovers'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3 className='font-semibold text-gray-800 text-center'>
                    CAPAS
                  </h3>
                </div>

                {/* Category 4 - ACESSÓRIOS */}
                <div
                  onClick={() => handleCategoryNavigate('Acessórios')}
                  className='flex flex-col items-center cursor-pointer'
                >
                  <img
                    src={assets.productCollection8}
                    alt='Shop by Collection'
                    className='w-full h-32 object-cover rounded mb-3'
                  />
                  <h3 className='font-semibold text-gray-800 text-center'>
                    ACESSÓRIOS
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
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
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate('/orders')}
                    className='cursor-pointer hover:text-black'
                  >
                    Orders
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
        } z-50`} // Set z-index to ensure it's above the carousel
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
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/collection'
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/about'
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-2 pl-6 border'
            to='/contact'
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
