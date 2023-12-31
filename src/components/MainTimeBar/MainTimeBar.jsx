/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MainTimeBar = ({
  className,
  vector = "https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector.svg",
  img = "https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-1.svg",
  elementPmClassName,
  group = "https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/group-1865-2@2x.png",
}) => {
  return (
    <div className={`main-time-bar ${className}`}>
      <div className={`element-PM ${elementPmClassName}`}>9:41 PM</div>
      <img className="vector" alt="Vector" src={vector} />
      <img className="group" alt="Group" src={group} />
      <img className="img" alt="Vector" src={img} />
    </div>
  );
};

MainTimeBar.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  group: PropTypes.string,
};
