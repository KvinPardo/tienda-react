import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Contact from "./pages/Contact";
import { Servicios } from "./pages/Servicios";
import Carrito from "./components/Carrito";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route
            path="/catalogo/categoria/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/catalogo/item/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/producto/:id" element={<DetalleProducto/>}/> */}
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
