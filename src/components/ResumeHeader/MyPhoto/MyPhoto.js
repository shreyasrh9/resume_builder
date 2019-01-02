import React from "react";
import "./MyPhoto.css";

const myPhoto = props => {
  return <img src={props.source} className="myPhoto" alt={props.alt} />;
};

export default myPhoto;
