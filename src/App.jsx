import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
// import ProductDetails from "./pages/ItemDetailContainer";

// components
// import Sidebar from "./components/CartWidget";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./pages/ItemListContainer";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
// import ItemsList from "./components/fromFirebase/ItemsList";
// import Comprar from "./components/Comprar";
import Formulario from "./components/Formulario";
// import CartWidget from "./components/CartWidget";
// import CartItem from "./components/CartItem";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
// import MakeOrder from './components/MakeOrder';

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoryId" element={<Home />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/items" element={<ItemsList />} /> */}
          <Route path="/carrito" element={<CartWidget />} />
          <Route path="/formulario" element={<Formulario />} />
          {/* <Route path='/comprar' element={<Comprar />} />   */}
        </Routes>
        {/* <Sidebar /> */}
        <Footer/>        
      </Router>
    </div>
  );
};

export default App;
