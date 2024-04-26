import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <h2>About Card Deck API Project</h2>
      <p style={{ maxWidth: "375px" }}>
        The Card Deck API project is designed to demonstrate the integration of
        the Card Deck API into a web application. The project allows users to
        perform various actions related to a deck of cards, such as shuffling
        the deck, drawing cards, adding cards to piles, and more.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Draw a card from the deck</li>
        <li>Shuffle the deck</li>
        <li>View Deck</li>
        {/* Add more features as needed */}
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>Axios</li>
        <li>React Router</li>
        {/* Add more technologies as needed */}
      </ul>
    </div>
  );
};

export default About;
