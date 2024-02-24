import React from "react";

const FBCheckboxInput = ({ title, label }) => {
  return (
    <div className=" w-2/3 flex flex-row items-center justify-between">
      {title && <label>{title}</label>}
      <div className="flex flex-row items-center justify-normal gap-2">
        <input
          type="checkbox"
          className="h-5 w-5 border border-gray-200 rounded text-transparent"
        />
        {label && <label>{label}</label>}
      </div>
    </div>
  );
};

export default FBCheckboxInput;
