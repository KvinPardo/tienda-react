import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGEINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
);
