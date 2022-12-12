import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PRODUCTOS } from "../data/productos.js";
import CardProducto from "./CardProducto.jsx";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTOS);
      }, 1000);
    });
    getProductos.then((res) => setProductos(res));
  }, []);

  return (
    <>
      {/* <h1 name="more"  className="text-center text-5xl mt-16 font-thin">Nuestros Mejores <span className="font-semibold">Productos</span> </h1> */}
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm md:max-w-none md:mx-0 ">
          {productos.map((i) => (
            <CardProducto key={i.id} {...i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;

// <DetalleProducto producto={producto}/>
