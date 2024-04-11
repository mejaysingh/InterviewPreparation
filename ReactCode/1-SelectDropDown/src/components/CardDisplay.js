// src/components/CardDisplay.js
import React from "react";

/* eslint-disable react/prop-types */
// TODO: upgrade to latest eslint tooling
const CardDisplay = ({ item }) => {
  if (!item) return "<h1>Not Found</h1>";

  return (
    <div className="card">
      {console.log("item=", item)}
      <img src={item.imageURL} alt={item.title} aria-label={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
};

export default CardDisplay;
