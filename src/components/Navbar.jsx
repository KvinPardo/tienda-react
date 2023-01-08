import React, { useContext, useEffect, useState } from "react";
// import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Logo from "../components/Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  //  navbar state
  const [isActive, setIsActive] = useState(false);
  // const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"} className="z-20">
          <Logo width="50px" />
        </Link>

        {/* Menú */}
        <ul className="hidden md:flex uppercase justify-between text-lg">
          <li className="">
            <Link
              to={"/"}
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

        {/* carrito */}
        <Link
          to={`/carrito`}
          >
          <div
            className="cursor-pointer flex relative"
            // onClick={() => setIsOpen(!isOpen)}
            >
            <BsBag className="text-2xl" />
            <div className="bg-red-400 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
