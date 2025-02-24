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

  return (
    <div className='w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] py-2 fixed top-0 bg-white z-50 shadow-[0_2px_4px_rgba(0,0,0,0.15)]'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <img
            src={assets.logo}
            className='mx-auto sm:mx-0 mt m-1 w-24 sm:w-32 md:w-35'
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
            <div className='absolute left-1/2 transform -translate-x-1/2 top-full hidden group-hover:block bg-white shadow-lg w-[1100px] p-6 rounded-md z-50'>
              <div className='grid grid-cols-4 gap-6 justify-items-center'>
                {/* Category 1 - DECKS */}
                <div
                  onClick={() => navigate('/decks')}
                  className='relative block overflow-hidden cursor-pointer group'
                >
                  <img
                    src={assets.dropdown1}
                    alt='Decks'
                    className='w-full h-48 object-cover rounded'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 group-hover:bg-black/30'>
                    <span className='text-white text-xl font-bold'>DECKS</span>
                  </div>
                </div>

                {/* Category 2 - LEASHES */}
                <div
                  onClick={() => navigate('/leashes')}
                  className='relative block overflow-hidden cursor-pointer group'
                >
                  <img
                    src={assets.dropdown2}
                    alt='Leashes'
                    className='w-full h-48 object-cover rounded'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 group-hover:bg-black/30'>
                    <span className='text-white text-xl font-bold'>
                      LEASHES
                    </span>
                  </div>
                </div>

                {/* Category 3 - CAPAS */}
                <div
                  onClick={() => navigate('/capas')}
                  className='relative block overflow-hidden cursor-pointer group'
                >
                  <img
                    src={assets.dropdown5}
                    alt='Capas'
                    className='w-full h-48 object-cover rounded'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 group-hover:bg-black/30'>
                    <span className='text-white text-xl font-bold'>CAPAS</span>
                  </div>
                </div>

                {/* Category 4 - ACESSÓRIOS */}
                <div
                  onClick={() => navigate('/acessorios')}
                  className='relative block overflow-hidden cursor-pointer group'
                >
                  <img
                    src={assets.dropdown4}
                    alt='Acessórios'
                    className='w-full h-48 object-cover rounded'
                  />
                  <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition duration-300 group-hover:bg-black/30'>
                    <span className='text-white text-xl font-bold'>
                      ACESSÓRIOS
                    </span>
                  </div>
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
            className='w-7 cursor-pointer sm:hidden'
            alt='Menu'
          />
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {/* Overlay para efeito escurecido ao fundo */}
      {visible && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 z-50 transition-opacity'
          onClick={() => setVisible(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white shadow-lg z-[60] transform ${
          visible ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        {/* Botão de voltar */}
        <div
          onClick={() => setVisible(false)}
          className='flex items-center gap-4 p-4 cursor-pointer text-gray-700 font-semibold text-lg'
        >
          <img
            className='h-5 rotate-180'
            src={assets.dropdown_icon}
            alt='Voltar'
          />
          <p>Voltar</p>
        </div>

        {/* Links */}
        <nav className='flex flex-col text-gray-700'>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border-b hover:bg-gray-100 transition'
            to='/'
          >
            INÍCIO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border-b hover:bg-gray-100 transition'
            to='/collection'
          >
            COLEÇÃO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border-b hover:bg-gray-100 transition'
            to='/about'
          >
            SOBRE NÓS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className='py-3 pl-6 border-b hover:bg-gray-100 transition'
            to='/contact'
          >
            POLÍTICA COMERCIAL
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
