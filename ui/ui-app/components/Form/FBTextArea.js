import React from "react";

const FBTextArea = ({ value = "", onChange, ...props }) => {
  return (
    <textarea
      {...props}
      value={value.join("\n")}
      onChange={onChange}
      className="w-2/3 h-36 overflow-y-scroll border border-solid border-highlight-border rounded px-4 py-2 text-base focus:outline-none no-scrollbar"
    />
  );
};

export default FBTextArea;
