import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='relative w-full border border-gray-400'>
      {/* Vídeo de fundo */}
      <video
        className='w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={assets.video_hero} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Texto centralizado com efeito de transição */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-white text-4xl md:text-6xl font-bold opacity-50 hover:opacity-80 transition-opacity duration-500'>
          Bem vindo ao portal de pedidos
        </h1>
      </div>
    </div>
  );
};

export default Hero;
