import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Creator = (props) => {
  return (
    <div className="Creator">
      <Link to={"details/" + props.id} style={{color: "black"}}>
        <h1>{props.name}</h1>
      </Link>
        {props.description}
        <p>
        <a href={props.url}>Link</a>
        </p>
    </div>
  );
};

export default Creator;