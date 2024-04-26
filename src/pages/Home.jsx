// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <ul>
        {/* Links to other pages */}
        <li>
          <Link to="/draw-card">Draw a Card</Link>
        </li>
        <li>
          <Link to="/shuffle-deck">Shuffle Deck</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add links to other pages */}
      </ul>
    </div>
  );
};

export default Home;
