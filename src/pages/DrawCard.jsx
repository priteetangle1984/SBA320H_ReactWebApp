// pages/DrawCard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const DrawCard = () => {
  //hook that allows functional components to manage state.
  const [card, setCard] = useState(null);
  //returns an array with two elements: current state value (card) and a function (setCard) to update
  //card represents the drawn card state, and setCard updates state.

  useEffect(() => {
    // Effect function to fetch data from the Deck of Cards API
    axios
      .get("https://deckofcardsapi.com/api/deck/new/draw/") //
      .then((response) => {
        // Set the drawn card state
        setCard(response.data.cards[0]);
      })
      .catch((error) => {
        console.error("Error fetching card:", error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="page-container">
      {/* Draw Card Page */}
      <h1>Draw Card Page</h1>
      {card && (
        <div>
          {/* Display the drawn card */}
          <img src={card.image} alt={card.code} />
          <p>
            {card.value} of {card.suit}
          </p>
        </div>
      )}
    </div>
  );
};

export default DrawCard;
