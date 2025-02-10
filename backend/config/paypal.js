import checkoutNodeJssdk from '@paypal/checkout-server-sdk';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

// Configuração do cliente PayPal
const environment = new checkoutNodeJssdk.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID, // ID do cliente do PayPal
  process.env.PAYPAL_SECRET // Segredo do cliente do PayPal
);

const client = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

export default client; // Exporta o cliente PayPal
