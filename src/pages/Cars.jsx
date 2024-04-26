import React from "react";
import CarList from "./CarList";

const Cars = () => {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      price: 25000,
      image: "toyota_camry.jpg",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      price: 22000,
      image: "honda_civic.jpg",
    },
    {
      id: 3,
      make: "Ford",
      model: "Fusion",
      price: 27000,
      image: "ford_fusion.jpg",
    },
  ];

  return (
    <div>
      <h1>Our Cars</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Cars;
