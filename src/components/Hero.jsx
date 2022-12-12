import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center ml-12">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>La vida es
          </div>
          {/* title */}
          <h1 className="text-[70px] font-light mb-12 uppercase">
            Tejer <strong className="text-white">sueños</strong> <br />
            <span className="uppercase"> y Bordar <strong className="text-white">Historias</strong> </span>
          </h1>
          <Link
            to="catalogo"
            smooth="true"
            duration={500}
            className="self-start uppercase relative before:content-[''] before:absolute before:block before:w-[100%] before:h-[2px] before:bottom-0 before:left-0 before:bg-red-700 text-center before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300 text-primary font-bold"
          >
            Ver Más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
