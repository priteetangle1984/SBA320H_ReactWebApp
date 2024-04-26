import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer/Footer"; // Import the Footer component
import Home from "./pages/Home";
import DrawCard from "./pages/DrawCard";
import ShuffleDeck from "./pages/ShuffleDeck";
import ViewDeck from "./pages/ViewDeck";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for DrawCard page */}
          <Route path="/draw-card" element={<DrawCard />} />
          {/* Route for ShuffleDeck page */}
          <Route path="/shuffle-deck" element={<ShuffleDeck />} />
          {/* Route for ViewDeck page */}
          <Route path="/view-deck/:deckId" element={<ViewDeck />} />
          <Route path="/about" element={<About />} />{" "}
          {/* Route for About page */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Route for Contact page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
