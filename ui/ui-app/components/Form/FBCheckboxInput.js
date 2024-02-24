import React from "react";

const FBCheckboxInput = ({ title, label }) => {
  return (
    <div className=" w-2/3 flex flex-row items-center justify-between">
      {title && <label>{title}</label>}
      <div className="flex flex-row items-center justify-normal gap-2">
        <input
          type="checkbox"
          className="appearence-none h-5 w-5 border-2 rounded bg-primary cursor-pointer"
        />
        {label && <label className="text-gray-600">{label}</label>}
      </div>
    </div>
  );
};

export default FBCheckboxInput;
