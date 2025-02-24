import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import ProductCollection from '../components/ProductCollection';
import VideoPlayer from '../components/VideoPlayer';
import Review from '../components/reviews';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Sempre rola para o topo ao carregar a página
  }, []);

  return (
    <div className='w-full overflow-x-hidden'>
      <Hero />
      <ProductCollection />
      <VideoPlayer />
      <BestSeller />
      <Review />
    </div>
  );
};

export default Home;
