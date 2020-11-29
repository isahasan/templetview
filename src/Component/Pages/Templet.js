import React from "react";
import { Link } from "react-router-dom";
import "./Templet.css";

function Templet({ el }) {
  return (
    <div className="templet">
      <div className="img_container">
        <img className=" templet_img" src={el.templetimage} alt={el.title} />
      </div>
      <h2 className="templet_title m-left">
        <Link to={`/Templetlist/${el.id}`}>{el.title}</Link>
      </h2>
      <span className="templet_author m-left">By: {el.author}</span>
      <div className="templet_price">
        <span className="price">{el.price}</span>
        <span>$</span>
      </div>
      <span className={el.Features ? "Features" : ""}>
        {el.Features ? "Available" : null}
      </span>
    </div>
  );
}

export default Templet;
