import React from "react";

export default function Card(props) {
  return (
    <div className="col-sm-12 mt-2">
      <div className="card" style={props.style}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a href="/" className="btn btn-primary">
            {props.count}
          </a>
        </div>
      </div>
    </div>
  );
}
