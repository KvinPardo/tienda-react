import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoBordado from "./Logo/LogoBordado";

const Navbar = () => {
  // header state
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full relative">
        <Link to={"/"} className="z-20">
          <LogoBordado width="50px"/>
        </Link>

        {/* Menú */}

        <ul className="hidden md:flex uppercase justify-between text-lg">
          <li className="">
            <Link
              to={'/'}
              smooth="true"
              duration={500}
              className="relative before:content-[''] before:absolute before:block before:w-[100%] before:h-[2px] 
                        before:bottom-0 before:left-0 before:bg-red-700 text-center
                        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300"
            >
              Inicio
            </Link>
          </li>
          <li className="overflow-hidden whitespace-nowrap">
            <Link
              to={`/catalogo`}
              smooth="true"
              duration={500}
              className="relative before:content-[''] before:absolute before:block before:w-[100%] before:h-[2px] 
                        before:bottom-0 before:left-0 before:bg-red-700 text-center
                        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300"
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              to={`/servicios`}
              smooth="true"
              duration={500}
              className="relative before:content-[''] before:absolute before:block before:w-[100%] before:h-[2px] 
                        before:bottom-0 before:left-0 before:bg-red-700 text-center
                        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300"
            >
              Servicios
            </Link>
          </li>

          <li>
            <Link
              to={`/contacto`}
              smooth="true"
              duration={500}
              className="relative before:content-[''] before:absolute before:block before:w-[100%] before:h-[2px] 
                        before:bottom-0 before:left-0 before:bg-red-700 text-center
                        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                        before:transition before:ease-in-out before:duration-300"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/*  Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menú */}

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#f1eae3] flex flex-col justify-center items-center"
          }
        >
          <li className="py-4 text-4xl hover:text-gray-500">
            <Link to="/" smooth="true" duration={500} onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li className="py-4 text-4xl hover:text-gray-500">
            <Link
              to="catalogo"
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              Catálogo
            </Link>
          </li>
          <li className="py-4 text-4xl hover:text-gray-500">
            <Link
              to="/servicios"
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              Servicios
            </Link>
          </li>
          <li className="py-4 text-4xl hover:text-gray-500">
            <Link
              to="/contacto"
              smooth="true"
              duration={500}
              onClick={handleClick}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* cart */}
        <div
          // onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {/* {itemAmount} */}4
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
