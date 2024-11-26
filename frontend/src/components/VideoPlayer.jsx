import React from 'react';
import Title from './Title';

const VideoPlayer = () => {
  return (
    <>
      <div className='text-center text-3xl py-6'>
        <Title text1='OS MELHORES' text2='SARCÓFAGOS' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Tivemos a grande honra de receber um review sobre essa lenda do surf
          elogiando e recomendando nosso sarcófago
        </p>
      </div>
      <div className='my-6 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 md:my-10'>
        <iframe
          className='w-full max-w-[400px] md:max-w-[560px] aspect-video border-4 border-gray-800 rounded'
          src='https://www.youtube.com/embed/1xcR1oPOneo?rel=0&showinfo=0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
        <iframe
          className='w-full max-w-[400px] md:max-w-[560px] aspect-video border-4 border-gray-800 rounded'
          src='https://www.youtube.com/embed/iQTmZACDRNA?rel=0&showinfo=0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
