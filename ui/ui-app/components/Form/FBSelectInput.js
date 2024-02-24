import React from "react";
import Arrow from "../Icons/Arrow";

const FBSelectInput = () => {
  return (
    <div className="flex flex-row h-11  w-full overflow-hidden">
      <div className="w-2/3 items-center justify-center flex rounded-l border border-highlight-border">
        Display Choices in Alphabetical
      </div>
      <div className="px-3 py-3 bg-highlight-border-light rounded-r border border-highlight-border cursor-pointer hover:bg-highlight-border transition-all">
        <Arrow className="w-5 h-5" />
      </div>
    </div>
  );
};

export default FBSelectInput;
