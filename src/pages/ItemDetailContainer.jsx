import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTOS } from "../data/productos.js";
import Loader from "../components/Loader.jsx";
import { CartContext } from "../context/CartContext.jsx";
// import { ProductContext } from '../contexts/ProductContext';
import {HiArrowLeft} from 'react-icons/hi'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // const { addToCart } = useCart()

  useEffect(() => {
    getItemDetail().then((res) => {
      setItem(res);
    });
  }, [id]);

  const getItemDetail = () => {
    return new Promise((resolve, reject) => {
      const item = PRODUCTOS.find((p) => p.id == id);
      setTimeout(() => {
        resolve(item);
      }, 500);
    });
  };

  // Si el producto no existe
  if (!item) {
    return (
      <Loader />

      // <div className="flex items-center justify-center h-screen">
      //   <div className="spinner">
      //     <div className="rect1"></div>
      //     <div className="rect2"></div>
      //     <div className="rect3"></div>
      //     <div className="rect4"></div>
      //     <div className="rect5"></div>
      //   </div>

      // </div>
    );
  }

  // Destructure product

  return (
    <section className="md:pt-32 pb-12 lg:py-32 h-screen flex items-center ">
      <div className="container mx-auto md:mt-0 mt-[400px]">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center ">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img
              className="max-w-[300px] lg:max-w-[25rem]"
              src={item.image}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0">
              {item.name}
            </h1>
            <p className=" text-gray-500 text-2xl tracking-wider">
              ${item.price}
            </p>
            <div className="font-medium mb-6 text-md text-justify">
              <h3 className="py-4 uppercase tracking-widest">Descripción:</h3>
              {item.description}
            </div>
            <button
                onClick={() => addToCart(item, item.id)}
                className="bg-primary py-4 px-6 text-white rounded-none hover:bg-slate-600"
              >
                Agregar al Carrito
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
