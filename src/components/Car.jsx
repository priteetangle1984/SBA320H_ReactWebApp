import React from "react";

const Car = ({ make, model, price, image }) => {
  return (
    <div className="car">
      <img src={image} alt={`${make} ${model}`} />
      <h2>{`${make} ${model}`}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Car;
