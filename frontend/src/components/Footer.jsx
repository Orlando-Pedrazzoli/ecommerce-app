import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='px-4 mt-10 sm:px-10 py-10 bg-gray-100 border'>
      <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 text-sm'>
        {/* Logo & Description */}
        <div className='text-center sm:text-left'>
          <img
            src={assets.logo}
            className='mx-auto sm:mx-0 mt mb-5 w-32'
            alt='Elite Surfing Logo'
          />
          <p className='w-full sm:w-2/3 text-gray-600 mx-auto sm:mx-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
            deleniti fuga nostrum! Ad, dolorem doloribus suscipit odio quas
            eius. Odio magnam quibusdam delectus laborum aliquid voluptatem
            saepe obcaecati ea.
          </p>
        </div>

        {/* Company Links */}
        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+351 912164220</li>
            <li>pedrazzoliorlando@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className='mt-12'>
        <hr className='border-gray-300' />
        <p className='py-2 text-sm text-center'>
          Copyright 2024@ elitesurfingpedidos.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
