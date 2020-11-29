import React from "react";
import Templets from "../../Templets.json";
import "./Templetreview.css";

function TempletReview(props) {
  console.log(props.match.params.Id);
  const id = props.match.params.Id;
  const Temp = Templets.find((el) => el.id === id);
  console.log(Temp);
  return (
    <div>
      <h2> card Component </h2>
      {/* <h2> id: {id} </h2> */}
      <div className="templet_details">
        <div className="img_container_details">
          <img
            className="templet_img_details"
            src={Temp.templetimage}
            alt={Temp.desc}
          />
        </div>
        <div className="details_container">
          <span className={Temp.Features ? "Features_details" : ""}>
            {Temp.Features ? "Available" : null}
          </span>
          <h2 className="templet_title_details">{Temp.title}</h2>
          <p className="details_p">{Temp.desc}</p>
          <span className="details_price">{Temp.price}</span>
          <span className="details_categorys">
            {Temp.categories.map((el) => (
              <p className="details_categorys_p" key={el}>
                {el}
              </p>
            ))}
          </span>
          <span className="details_Perches">{Temp.Perches}</span>

          <span className="details_published ">{Temp.published}</span>
        </div>
      </div>
    </div>
  );
}

export default TempletReview;
