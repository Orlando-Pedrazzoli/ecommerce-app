import React from 'react';
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import ProductCollection from '../components/ProductCollection';
import VideoPlayer from '../components/VideoPlayer';
import Review from '../components/reviews';

const Home = () => {
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
