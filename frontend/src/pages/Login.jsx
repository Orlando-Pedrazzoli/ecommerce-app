import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  const onSubmitHandler = async event => {
    event.preventDefault();
    setIsLoading(true); // Start loading

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
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Sign Up' && (
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        <p
          onClick={() =>
            setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
          }
          className='cursor-pointer'
        >
          {currentState === 'Login' ? 'Create account' : 'Login Here'}
        </p>
      </div>
      <button
        type='submit'
        disabled={isLoading}
        className='bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-500'
      >
        {isLoading
          ? 'Loading...'
          : currentState === 'Login'
          ? 'Sign In'
          : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
