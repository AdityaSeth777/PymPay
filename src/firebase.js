// firebase.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAMHdsLO5UnKR95g0mf_DhfUhkAyzN8d14",
  authDomain: "pympay-aditya.firebaseapp.com",
  projectId: "pympay-aditya",
  storageBucket: "pympay-aditya.appspot.com",
  messagingSenderId: "651633037355",
  appId: "1:651633037355:web:d1685a142cbe11013e1a6e",
  measurementId: "G-WV059K66EL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; // Export the initialized app

