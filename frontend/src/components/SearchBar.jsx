import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, applyFilter } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // Trigger search when the search icon is clicked
  const handleSearchIconClick = () => {
    applyFilter(); // Trigger the search
  };

  // Hide search bar and clear search input when clicking outside or on the close icon
  const handleCloseSearchBar = () => {
    setSearch('');
    setShowSearch(false);
    applyFilter(); // Reapply filters to show all products
  };

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='O que você procura?'
        />
        {/* Show search icon */}
        <img
          onClick={handleSearchIconClick}
          className='w-4 cursor-pointer'
          src={assets.search_icon}
          alt='Search Icon'
        />
      </div>
      <img
        onClick={handleCloseSearchBar}
        className='inline w-3 cursor-pointer'
        src={assets.cross_icon}
        alt='Close Icon'
      />
    </div>
  ) : null;
};

export default SearchBar;
