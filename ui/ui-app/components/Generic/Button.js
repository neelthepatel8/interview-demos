import React from "react";

const Button = ({ className, children }) => {
  return (
    <button className={`font-bold py-2 px-4 rounded border-0 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
