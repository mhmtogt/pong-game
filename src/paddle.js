import React from "react";

const Paddle = ({ position, side }) => {
  const paddleStyle = {
    top: `${position}px`,
    [side]: "0px",
  };

  return <div className={`paddle ${side}`} style={paddleStyle} />;
};

export default Paddle;
