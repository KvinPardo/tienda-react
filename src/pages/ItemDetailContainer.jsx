import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTOS } from "../data/productos.js";

const ItemDetailContainer = () => {
  // console.log(data);

  const [item, setItem] = useState({});
  const { id } = useParams();

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
      <div className="flex items-center justify-center h-screen">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
      
    );
  }

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center md:-space-x-20">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img
              className="max-w-[400px] lg:max-w-[500px]"
              src={item.image}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left md:space-y-12">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {item.name}
            </h1>
            <div className="text-xl  font-medium mb-6">{item.category}</div>
            <p className="mb-8 text-red-500">{item.price}</p>
            <button className="bg-primary py-4 px-8 text-white mb-10">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
