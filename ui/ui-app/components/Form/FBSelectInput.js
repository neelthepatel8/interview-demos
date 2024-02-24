import React from "react";

const FBSelectInput = () => {
  return (
    <div>
      <select className="w-2/3 h-9 border border-solid border-highlight-border rounded px-3 text-base">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default FBSelectInput;
