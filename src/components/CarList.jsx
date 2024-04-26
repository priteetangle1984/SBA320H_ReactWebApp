import React from "react";
import Car from "./Car";

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <Car
          key={car.id}
          make={car.make}
          model={car.model}
          price={car.price}
          image={car.image}
        />
      ))}
    </div>
  );
};

export default CarList;
