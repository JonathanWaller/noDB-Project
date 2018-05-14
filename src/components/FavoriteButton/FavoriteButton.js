import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = props => {
  return <button className="fav-button" onClick={() => props.add()}>
  ADD TO FAVORITES </button>;
};

export default FavoriteButton;



