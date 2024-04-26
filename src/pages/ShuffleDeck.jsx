import React, { useState, useEffect } from "react";
import axios from "axios";

const ShuffleDeck = () => {
  const [deckId, setDeckId] = useState(null);

  useEffect(() => {
    // Shuffle the deck when component mounts
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/")
      .then((response) => {
        // Set the deck ID state
        setDeckId(response.data.deck_id);
      })
      .catch((error) => {
        console.error("Error shuffling deck:", error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="page-container">
      <h1>Shuffle Deck Page</h1>
      {/* Shuffle Deck Page */}
      {deckId && <p>Deck ID: {deckId}</p>}
    </div>
  );
};

export default ShuffleDeck;
