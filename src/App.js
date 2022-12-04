import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  return (
    <div className="App">
      <Header />
      <FilterBar
        {...{
          selectedLocation,
          setSelectedLocation,
          selectedDate,
          setSelectedDate,
          selectedPrice,
          setSelectedPrice,
          selectedPropertyType,
          setSelectedPropertyType,
        }}
      />
      <Cards
        {...{
          selectedLocation,
          selectedDate,
          selectedPrice,
          selectedPropertyType,
        }}
      />
    </div>
  );
}

export default App;
