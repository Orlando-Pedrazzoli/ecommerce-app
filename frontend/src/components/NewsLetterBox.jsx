import React from 'react';

const NewsLetterBox = () => {
  const onSubmitHandler = event => {
    event.preventDefault();
  };
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Cadastre-se agora e ganhe 10% de desconto
      </p>
      <p className='text-gray-400 mt-3'>
        Receba ofertas exclusivas e novidades em primeira mão!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Insira seu e-mail e aproveite!'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4'
        >
          CADASTRE-SE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
