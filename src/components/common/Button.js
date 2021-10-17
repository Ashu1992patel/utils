import React from "react";

export default function Button(props) {
  return (
    <button className="btn btn-sm btn-primary mt-2 mx-1" onClick={props.event}>
      {props.name}
    </button>
  );
}
