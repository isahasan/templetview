import React from "react";
import TempletData from "../../Templets.json";
import Templet from "./Templet";
import "./Templetlist.css";

function Templetlist() {
  if (TempletData === 0) {
    return <div className="notice">404 Not Found </div>;
  } else {
    return (
      <div className="templets">
        {TempletData.map((el) => (
          <Templet key={el.id} el={el} />
        ))}
      </div>
    );
  }
}

export default Templetlist;
