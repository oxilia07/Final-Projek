// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkkPxbDqiHYeVY6_V-3CsHxmOsDsESBj8',
  authDomain: 'beauty-shop-d7dac.firebaseapp.com',
  projectId: 'beauty-shop-d7dac',
  storageBucket: 'beauty-shop-d7dac.firebasestorage.app',
  messagingSenderId: '468287184594',
  appId: '1:468287184594:web:4fbc702d129464726d570b',
  measurementId: 'G-XDDSJFFVNM'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
