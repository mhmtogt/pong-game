import React from "react";

const Ball = ({ position }) => {
  const ballStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return <div className="ball" style={ballStyle} />;
};

export default Ball;
