import React from "react";
import "./MoreJokes.css";

const MoreJokes = props => {
  return <button onClick={props.randomJoke} className = "newButton" >
  Hit me!
</button>
};

export default MoreJokes;



