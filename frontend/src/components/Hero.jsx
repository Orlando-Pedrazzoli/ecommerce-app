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
        speed={2000} // Transição mais lenta (1 segundo)
        autoplay={{
          delay: 3000, // 3 segundos entre imagens
          disableOnInteraction: false, // Continua mesmo após interação
        }}
        navigation={true} // Ativa os botões de navegação (<, >)
        modules={[Autoplay, Navigation]} // Inclui os módulos de navegação e autoplay
        className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]' // Ajustando a altura do carousel conforme a tela
      >
        {/* Substitua estas imagens pelos assets reais */}
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src={assets.hero_img}
            alt='Hero 1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src={assets.productCollection8}
            alt='Hero 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src={assets.productCollection10}
            alt='Hero 3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src={assets.productCollection12}
            alt='Hero 3'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
