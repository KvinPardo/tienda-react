import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#D5C095]">
      <span className="flex justify-center items-center text-white font-light gap-1">
        <FaMapMarkerAlt/>
        Calle Bagdad, Maipú, Santiago de Chile
      </span>
    </div>
  );
};

export default Header;
