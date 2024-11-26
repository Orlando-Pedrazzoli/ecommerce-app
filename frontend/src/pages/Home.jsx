import React from 'react';
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import ProductCollection from '../components/ProductCollection';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCollection />
      <VideoPlayer />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
