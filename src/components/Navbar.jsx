import React from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo/Logo";
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className="fixed w-full h-[90px] flex justify-around items-center md:px-4">
      <div>
        {/* Logo */}
        <a href="#"><Logo/></a>
      </div>
      
      {/* Menú */}
      <ul className="hidden md:flex items-center">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Catálogo</a>
        </li>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        </ul>

        <div className="flex">
          <button className="relative">
            <CartWidget/>
            <span className="absolute bg-orange-400 px-1 rounded-full text-xs text-white font-bold top-0 right-0 translate-x-3 -translate-y-2">
              3
            </span>
          </button>
        </div>
      

      {/*  Hamburger */}
      <div className="md:hidden">
        <AiOutlineMenu size={20}/>
      </div>
    </div>
  );
};

export default Navbar;
