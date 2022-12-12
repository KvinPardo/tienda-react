import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { RiArticleLine, RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f1eae4]">
      <div className="container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className="text-primary">
          <h1 className="w-full text-3xl font-bold">Pía Bordados</h1>
          <p className="py-4 text-primary">
            Somos una pequeña familia que se atrevió a emprender en el rubro de
            los bordados.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="/" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a href="/" target="_blank">
              <FaInstagram size={30} />
            </a>
            <a href="/" target="_blank">
              <FaTwitterSquare size={30} />
            </a>
            <a href="/" target="_blank">
              <FaWhatsappSquare size={30} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-primary">Ayuda</h6>
            <ul>
              <li className="py-2 text-sm p-0">¿Cómo comprar?</li>
              <li className="py-2 text-sm p-0">Devoluciones</li>
              <li className="py-2 text-sm p-0">Métodos de pago</li>
              <li className="py-2 text-sm p-0">Envío a Regiones</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-primary"></h6>
            <ul>
              <li className="py-2 text-sm p-0">Blog</li>
              <li className="py-2 text-sm p-0">Nuestros Clientes</li>
              <li className="py-2 text-sm p-0">Videos Bordados</li>
              <li className="py-2 text-sm p-0">Galería</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-medium text-primary">Pía</h6>
            <ul className="flex flex-col text-primary">
              <Link to={`/`} className="py-1">Inicio</Link>
              <Link to={`/catalogo`} className="py-1">Catálogo</Link>
              <Link to={`/servicios`} className="py-1">Servicios</Link>
              <Link to={`/contacto`} className="py-1">Contacto</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#f1eae2] h-full w-full">
        &copy; Pía Bordados | Todos los Derechos Reservados
      </div>
      ;
    </footer>
  );
};

export default Footer;
