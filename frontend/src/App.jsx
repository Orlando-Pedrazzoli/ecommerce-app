import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Announcement from './components/Announcement';
import ProtectedRoute from './components/ProtectedRoute';

// Páginas carregadas de forma assíncrona
const Home = lazy(() => import('./pages/Home'));
const Collection = lazy(() => import('./pages/Collection'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login')); // Login page
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
const Orders = lazy(() => import('./pages/Orders'));
const Verify = lazy(() => import('./pages/Verify'));
const ProductCollection = lazy(() => import('./components/ProductCollection'));
const Accordion = lazy(() => import('./components/Accordion'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Announcement />
      <div className='w-full overflow-x-hidden'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Route (Login Page) */}
            <Route path='/login' element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
              <Route path='/collection' element={<Collection />} />
              <Route
                path='/product-collection'
                element={<ProductCollection />}
              />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/accordion' element={<Accordion />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/place-order' element={<PlaceOrder />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/verify' element={<Verify />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default App;
