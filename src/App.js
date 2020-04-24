import React from "react";
import ChampCarousel from "./ChampCarousel/ChampCarousel.js";
import ItemSelect from "./ItemSelect/ItemSelect.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1> TFT Ultimate Bravery </h1>
      <ChampCarousel />
      <ItemSelect />
    </div>
  );
}

export default App;
