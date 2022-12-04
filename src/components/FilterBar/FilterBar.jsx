import React, { useState, useEffect } from "react";
import realEstate from "../../data/realEstate";
import "./FilterBar.css";
import { format, min } from "date-fns";

function FilterBar(props) {
  const {
    selectedLocation,
    setSelectedLocation,
    selectedDate,
    setSelectedDate,
    selectedPrice,
    setSelectedPrice,
    selectedPropertyType,
    setSelectedPropertyType,
  } = props;
  const locations = [
    ...new Set(realEstate.map((r) => r.state + ", " + r.country)),
  ];
  const propertyTypes = [...new Set(realEstate.map((r) => r.propertyType))];

  useEffect(() => {
    console.log("location", selectedLocation);
    console.log("date", selectedDate);
    console.log("price", selectedPrice);
    console.log("propertytype", selectedPropertyType);
  });

  return (
    <div className="filterbar">
      <div className="locations input-wrapper">
        <input
          className="input"
          value={selectedLocation}
          list="locations"
          name="location"
          id="location"
          placeholder="location"
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}
        />
        <datalist id="locations">
          {locations.map((location) => (
            <option value={location} />
          ))}
        </datalist>
      </div>
      <div className="date input-wrapper">
        <input
          className="input"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
          }}
          placeholder="When"
          type="date"
        />
      </div>
      <div className="price input-wrapper">
        <input
          className="input"
          value={selectedPrice.min}
          list="prices"
          name="price"
          id="price"
          placeholder="minimun price"
          onChange={(e) => {
            setSelectedPrice((state) => ({ ...state, min: e.target.value }));
          }}
        />
        <input
          className="input"
          value={selectedPrice.max}
          list="prices"
          name="price"
          id="price"
          placeholder="maximum price"
          onChange={(e) => {
            setSelectedPrice((state) => ({ ...state, max: e.target.value }));
          }}
        />
      </div>
      <div
        className="property-type input-wrapper"
        style={{ borderRight: "none" }}
      >
        <input
          className="input"
          value={selectedPropertyType}
          list="propertytypes"
          name="propertytype"
          id="propertytype"
          placeholder="propertytype"
          onChange={(e) => {
            setSelectedPropertyType(e.target.value);
          }}
        />
        <datalist id="propertytypes">
          {propertyTypes.map((propertytype) => (
            <option value={propertytype} />
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default FilterBar;
