import React from "react";
import "./mcard.css";

function Mcard(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.imgurl} className="card-img" alt={props.title} />
        <div className="card-title-box">
          <h5 className="card-title">
            {props.title}
            <span className="badge rating">{props.rating}</span>
          </h5>
        </div>
        <div className="card-description">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mcard;
