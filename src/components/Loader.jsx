import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <PacmanLoader
        size={50}
      />
    </div>
  );
};

export default Loader;
