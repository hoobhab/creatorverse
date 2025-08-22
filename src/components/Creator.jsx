import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Creator = (props) => {
  return (
    <div className="Creator">
      <Link to={"details/" + props.id} style={{ color: "black" }}>
        <h1>{props.name}</h1>
      </Link>
      <div className="card-update-link">
        <p>
          <button>
            <Link to={"EditCreator/" + props.id} style={{ color: "black" }}>
              Update creator
            </Link>
          </button>
        </p>
      </div>
      <p>
        <img class="creator" alt="Image of content creator" src={props.imageURL} />
      </p>
      {props.description}
      <p>
        <a class="creator-link" href={props.url}>🔗 Youtube</a>
      </p>
    </div>
  );
};

export default Creator;
