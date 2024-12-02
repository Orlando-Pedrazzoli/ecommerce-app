import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // CSS básico do Swiper
import 'swiper/css/navigation'; // CSS para navegação
import 'swiper/css/pagination'; // CSS para paginação
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='w-full relative'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        speed={2000} // Transição mais lenta (2 segundos)
        autoplay={{
          delay: 3000, // 3 segundos entre imagens
          disableOnInteraction: false, // Continua mesmo após interação
        }}
        navigation={true} // Ativa os botões de navegação (<, >)
        modules={[Autoplay, Navigation]} // Inclui os módulos de navegação e autoplay
        className='w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px]' // Ajustando a altura conforme tela
      >
        {/* Substitua estas imagens pelos assets reais */}
        <SwiperSlide>
          <div className='-mx-2 sm:-mx-4'>
            <img
              className='w-[calc(100%+4px)] sm:w-[calc(100%+8px)] h-full object-cover'
              src={assets.banner04}
              alt='Hero 1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='-mx-2 sm:-mx-4'>
            <img
              className='w-[calc(100%+4px)] sm:w-[calc(100%+8px)] h-full object-cover'
              src={assets.banner10}
              alt='Hero 1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='-mx-2 sm:-mx-4'>
            <img
              className='w-[calc(100%+4px)] sm:w-[calc(100%+8px)] h-full object-cover'
              src={assets.banner06}
              alt='Hero 1'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='-mx-2 sm:-mx-4'>
            <img
              className='w-[calc(100%+4px)] sm:w-[calc(100%+8px)] h-full object-cover'
              src={assets.banner07}
              alt='Hero 1'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
