import React from "react";
import "./mcard.css";

function Mcard(props) {
  return (
    <div >
      <div className="card my-3 card" style={{ width: "18rem" }}>
        <img src={props.imgurl} style={{height:"14em"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
            <span className="badge rating">{props.rating}</span>
          </h5>
          <p className="card-text">{props.description}</p>
          {/* <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toUTCString()}
            </small>
          </p> */}
          {/* <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Mcard;
