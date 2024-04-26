import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* Link to the Home page */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Link to the Draw Card page */}
          <Link to="/draw-card">Draw Card</Link>
        </li>
        <li>
          {/* Link to the Shuffle Deck page */}
          <Link to="/shuffle-deck">Shuffle Deck</Link>
        </li>
        <li>
          {/* Link to the About page */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Link to the Contact page */}
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add links to other pages */}
      </ul>
    </nav>
  );
};

export default Nav;
