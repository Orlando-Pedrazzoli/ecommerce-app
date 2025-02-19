import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '../assets/assets';

const Hero = () => {
  // Desktop banners (1920x700)
  const desktopBanners = [
    assets.banner04,
    assets.banner10,
    assets.banner06,
    assets.banner07,
  ];

  // Mobile banners (800x800)
  const mobileBanners = [
    assets.banner19, // Replace with your new 800x800 banners
    assets.banner17,
    assets.banner18,
    assets.banner22,
  ];

  return (
    <section className='w-full relative mb-0'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='w-full'
      >
        {desktopBanners.map((desktopSrc, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source
                media='(max-width: 767px)'
                srcSet={mobileBanners[index]}
              />
              <img
                className='w-full h-full object-cover'
                src={desktopSrc}
                alt={`Hero ${index + 1}`}
              />
            </picture>
          </SwiperSlide>
        ))}

        {/* Estilizando os botões */}
      </Swiper>
    </section>
  );
};

export default Hero;
