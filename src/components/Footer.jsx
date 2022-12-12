import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { RiArticleLine, RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f1eae4]">
      <div className="container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div className="text-primary">
          <h1 className="w-full text-3xl font-bold">Pía Bordados</h1>
          <p className="py-4 text-primary">
            Somos una pequeña familia que se atrevió a emprender en el rubro de los bordados.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
           <a href="https://www.facebook.com/PuraArtesanos?mibextid=LQQJ4d" target="_blank"><FaFacebookSquare size={30}/></a>
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaWhatsappSquare  size={30}/>
            
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-primary">Solutions</h6>
            <ul>
              <li className="py-2 text-sm p-0">Analytics</li>
              <li className="py-2 text-sm p-0">Marketing</li>
              <li className="py-2 text-sm p-0">Commerce</li>
              <li className="py-2 text-sm p-0">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-primary">Support</h6>
            <ul>
              <li className="py-2 text-sm p-0">Pricing</li>
              <li className="py-2 text-sm p-0">Documentation</li>
              <li className="py-2 text-sm p-0">Guides</li>
              <li className="py-2 text-sm p-0">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-primary">Company</h6>
            <ul>
              <li className="py-2 text-sm p-0">About</li>
              <li className="py-2 text-sm p-0">Blog</li>
              <li className="py-2 text-sm p-0">Jobs</li>
              <li className="py-2 text-sm p-0">Press</li>
              <li className="py-2 text-sm p-0">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-primary">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

<div>&copy; Pía Bordados | Todos los Derechos Reservados</div>;
