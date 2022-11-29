import React from "react";
import Card1 from "../assets/bordados-2.jpg";
import Card2 from '../assets/bordados-3.jpg';
import Card3 from '../assets/bordados-4.jpg';

const Cards = () => {
  return (
    <div className="md:container max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          {/* <p className="px-2">Through 8/26</p> */}
          <button className="border-white bg-white text-black mx-4 absolute bottom-4 rounded-md">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl"
          src={Card2}
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          {/* <p className="px-2">Added Daily</p> */}
          <button className="border-white bg-white text-black mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl"
          src={Card3}
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          {/* <p className="px-2">Tasty Treats</p> */}
          <button className="border-white bg-white text-black mx-4 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl"
          src={Card1}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Cards;
