import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID, // Ensure this matches your .env file
  currency: 'BRL',
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <PayPalScriptProvider options={paypalOptions}>
        <App />
      </PayPalScriptProvider>
    </ShopContextProvider>
  </BrowserRouter>
);
