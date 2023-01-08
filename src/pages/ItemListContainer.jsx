import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
// import SweetAlert from "../components/SweetAlert";


const ItemListContainer = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure Product
  const { id, name, category, image, price } = product;


  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-w-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
          {/* buttons */}
          
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            
            <button
              onClick={() => addToCart(product, id)}
              className="border-none"
              >
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/item/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>

      {/* categoría, título y precio */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/item/${id}`}>
          <h2 className="mb-1">{name}</h2>
        </Link>

        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default ItemListContainer;
