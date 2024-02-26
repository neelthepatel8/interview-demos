import React from "react";
const FBTextArea = ({ value = "", onChange, ...props }) => {
  return (
    <textarea
      {...props}
      value={value.join("\n")}
      onChange={onChange}
      className="w-full h-36 overflow-y-scroll border border-solid border-highlight-border bg-primary-bg dark:bg-dark-accent-bg-light dark:border-0 dark:drop-shadow-xl rounded px-4 py-2 text-base focus:outline-none no-scrollbar"
    />
  );
};
export default FBTextArea;
