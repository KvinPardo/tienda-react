import React from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const CardProducto = ({ id, name, category, image, price }) => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[200px]  mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-100% mx-auto flex justify-center items-center">
            <img
              className="max-h-full group-hover:scale-110 transition duration-300 bg-cover bg-center"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button className="border-none">
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link
            to={`/catalogo/item/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/catalogo/item/${id}`}>
          <h2 className='font-semibold mb-1'>{name}</h2>
        </Link>
        <div className='font-semibold'>{price}</div>
      </div>
    </div>
  );
};

export default CardProducto;

// <Link to={`/producto/${id}`} className="btn">Ver detalle </Link>
