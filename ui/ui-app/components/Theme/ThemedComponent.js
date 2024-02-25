import React from "react";
import ModeSwitch from "./ModeSwitch";

const ThemedComponent = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <ModeSwitch />
      {children}
    </div>
  );
};

export default ThemedComponent;
