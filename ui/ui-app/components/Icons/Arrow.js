import React from "react";

const Arrow = ({
  stroke = "black",
  fill = "black",
  height = "12px",
  width = "12px",
  className = "",
}) => {
  return (
    <svg
      className={className}
      stroke={stroke}
      fill={fill}
      stroke-width="0"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0Z"></path>
    </svg>
  );
};

export default Arrow;
