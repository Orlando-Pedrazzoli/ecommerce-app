import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Acesse sua conta');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async event => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const endpoint =
        currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const payload =
        currentState === 'Sign Up'
          ? { name, email, password }
          : { email, password };

      const response = await axios.post(backendUrl + endpoint, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success(
          currentState === 'Sign Up'
            ? 'Account created successfully!'
            : 'Logged in successfully!'
        );
      } else {
        toast.error(
          response.data.message || 'An error occurred. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'An error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-6 text-gray-800 mb-20'>
      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col items-center w-full gap-6'
      >
        <div className='inline-flex items-center gap-2 mb-4 mt-10'>
          <p className='prata-regular text-3xl font-semibold'>{currentState}</p>
          <hr className='border-none h-[2px] w-10 bg-gray-800' />
        </div>
        {currentState === 'Sign Up' && (
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            type='text'
            className='w-full px-4 py-2 border border-gray-800 rounded-md'
            placeholder='Name'
            required
          />
        )}
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type='email'
          className='w-full px-4 py-2 border border-gray-800 rounded-md'
          placeholder='Email'
          required
        />
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type='password'
          className='w-full px-4 py-2 border border-gray-800 rounded-md'
          placeholder='Password'
          required
        />
        <div className='w-full flex flex-col sm:flex-row justify-between text-sm mt-[-4px] space-y-2 sm:space-y-0'>
          <p className='cursor-pointer text-gray-600 hover:text-black'>
            Esqueci minha senha
          </p>
          <p
            onClick={() =>
              setCurrentState(
                currentState === 'Acesse sua conta'
                  ? 'Sign Up'
                  : 'Acesse sua conta'
              )
            }
            className='cursor-pointer text-gray-600 hover:text-black'
          >
            {currentState === 'Acesse sua conta'
              ? 'Ainda não tem cadastro? Inscreva-se agora'
              : 'Login Here'}
          </p>
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className='bg-black text-white font-medium px-12 py-3 mt-4 rounded-md hover:bg-gray-900 transition duration-300 disabled:bg-gray-500'
        >
          {isLoading
            ? 'Loading...'
            : currentState === 'Acesse sua conta'
            ? 'Sign In'
            : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
