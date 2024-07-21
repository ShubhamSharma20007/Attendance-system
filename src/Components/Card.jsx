import React from "react";
import { Link } from "react-router-dom";
const Card = ({ img }) => {
  return (
    <>
      <div className="md:w-28 w-20 h-20 md:h-28 flex justify-center  ">
        <Link to={"/products"}>
          <img
            src={img}
            className="flex-shrink-0 w-full h-full object-contain"
          />
        </Link>
      </div>
    </>
  );
};

export default Card;
