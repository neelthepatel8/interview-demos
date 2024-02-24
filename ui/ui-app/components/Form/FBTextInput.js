import React from "react";

const FBTextInput = ({ className, ...props }) => {
  const classes = `w-2/3 h-9 border border-solid border-highlight-border rounded px-3 text-base focus:outline-none ${className}`;
  return <input type="text" className={classes} {...props} />;
};

export default FBTextInput;
