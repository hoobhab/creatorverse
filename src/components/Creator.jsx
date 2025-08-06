import React from "react";
import { useState } from "react";

const Creator = (props) => {
  return (
    <div className="Creator">
        {props.name}
        {props.url}
        {props.description}
        {props.imageURL}
    </div>
  );
};

export default Creator;