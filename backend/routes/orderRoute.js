import express from 'express';
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  placeOrderPaypal, // Nova função
  verifyPaypal, // Nova função
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
  sendOrderEmail,
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/paypal', authUser, placeOrderPaypal); // Nova rota para PayPal

// User Feature
orderRouter.post('/userorders', authUser, userOrders);

// Verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay);
orderRouter.post('/verifyPaypal', authUser, verifyPaypal); // Nova rota para verificar PayPal

// Send order details via email
orderRouter.post('/sendemail', authUser, sendOrderEmail);

export default orderRouter;
