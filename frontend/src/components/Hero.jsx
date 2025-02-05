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
    assets.banner20, // Replace with your new 800x800 banners
    assets.banner21,
    assets.banner22,
    assets.banner23,
  ];

  return (
    <section className='w-full relative mb-0'>
      <Swiper
        spaceBetween={0} // No gaps between slides
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
        {/* Map through banners and render both desktop and mobile versions */}
        {desktopBanners.map((desktopSrc, index) => (
          <SwiperSlide key={index}>
            <picture>
              {/* Mobile Banner (800x800) */}
              <source
                media='(max-width: 767px)' // Applies to screens smaller than 768px (mobile)
                srcSet={mobileBanners[index]} // Use the corresponding mobile banner
              />
              {/* Desktop Banner (1920x700) */}
              <img
                className='w-full h-full object-cover'
                src={desktopSrc}
                alt={`Hero ${index + 1}`}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
