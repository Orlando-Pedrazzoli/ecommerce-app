import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='mt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-16 bg-gray-100 border space-y-16'>
      <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 text-sm'>
        {/* Logo & Description */}
        <div className='text-center sm:text-left'>
          <img
            src={assets.logo}
            className='mx-auto sm:mx-0 mt mb-5 w-24 sm:w-32 md:w-35'
            alt='Elite Surfing Logo'
          />
          <p className='w-full sm:w-2/3 text-gray-600 mx-auto sm:mx-0'>
            "A Elite Surfing nasceu para oferecer produtos de alta qualidade,
            feitos para os surfistas mais exigentes. Com inovação e paixão pelo
            surfe, buscamos transformar cada onda em uma oportunidade de
            superação."
          </p>
        </div>

        {/* Company Links */}
        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>EMPRESA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>INÍCIO</li>
            <li>COLEÇÃO</li>
            <li>SOBRE NÓS</li>
            <li>POLÍTICA DE VENDAS</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='text-center sm:text-left'>
          <p className='text-xl font-medium mb-5'>ENTRE EM CONTATO</p>
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
