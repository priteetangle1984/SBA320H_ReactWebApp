// pages/ViewDeck.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewDeck = () => {
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState(null);

  useEffect(() => {
    // Fetch deck information when component mounts and deckId changes
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/`)
      .then((response) => {
        // Set the deck information state
        setDeckInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching deck information:", error);
      });
  }, [deckId]); // Effect depends on deckId

  return (
    <div className="page-container">
      <h1>View Deck Page</h1>
      {deckInfo && (
        <div>
          {/* Display deck information */}
          <p>Remaining Cards: {deckInfo.remaining}</p>
          {/* Display other deck information */}
        </div>
      )}
    </div>
  );
};

export default ViewDeck;
