import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-3 sm:gap-4 md:gap-5 items-center mb-4 sm:mb-5 md:mb-6'>
      <p className='text-gray-500 text-lg sm:text-base md:text-xl lg:text-3xl'>
        {text1}{' '}
        <span className='text-gray-700 font-medium text-lg sm:text-base md:text-xl lg:text-3xl'>
          {text2}
        </span>
      </p>
      <p className='w-10 sm:w-14 md:w-20 h-[1.5px] sm:h-[2px] bg-gray-700'></p>
    </div>
  );
};

export default Title;
