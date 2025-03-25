import React, { useEffect, lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Announcement from './components/Announcement';

// Páginas carregadas de forma assíncrona
const Home = lazy(() => import('./pages/Home'));
const Collection = lazy(() => import('./pages/Collection'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const Orders = lazy(() => import('./pages/Orders'));
const Verify = lazy(() => import('./pages/Verify'));
const ProductCollection = lazy(() => import('./components/ProductCollection'));
const Decks = lazy(() => import('./pages/Decks'));
const Capas = lazy(() => import('./pages/Capas'));
const Leashes = lazy(() => import('./pages/Leashes'));
const Acessorios = lazy(() => import('./pages/Acessorios'));
const Accordion = lazy(() => import('./components/Accordion'));

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento das páginas
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div>
      <Announcement />
      <div className='w-full overflow-x-hidden'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <div className='pt-4 sm:pt-10'>
          {/* Se estiver carregando, exibe um spinner */}
          {isLoading ? (
            <div className='flex justify-center items-center h-screen'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500'></div>
            </div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* Página de login */}
                <Route path='/login' element={<Login />} />

                {/* Página inicial agora está acessível sem autenticação */}
                <Route path='/' element={<Home />} />

                {/* Rotas protegidas */}

                <Route path='/collection' element={<Collection />} />
                <Route
                  path='/product-collection'
                  element={<ProductCollection />}
                />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/accordion' element={<Accordion />} />
                <Route path='/decks' element={<Decks />} />
                <Route path='/leashes' element={<Leashes />} />
                <Route path='/acessorios' element={<Acessorios />} />
                <Route path='/capas' element={<Capas />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/place-order' element={<PlaceOrder />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/verify' element={<Verify />} />
              </Routes>
            </Suspense>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
