import React from "react";

const CharCard = ({ name, species, status, image }) => {
  return (
    <div className="max-w-[1240px] rounded overflow-hidden shadow-lg mx-auto ">
      <img src={image} alt="" className="w-full p-4 mt-2" />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 overflow-auto">{name}</h1>
        <h2 className="text-gray-700 text-base">{species}</h2>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharCard;
