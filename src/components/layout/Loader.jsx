import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";

const Loader = () => {
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;