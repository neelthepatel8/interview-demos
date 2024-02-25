import React from "react";

const FBTextInput = ({ className, ...props }) => {
  const errorClasses = props.iserror ? "border-red-500" : "";
  const classes = `w-full h-9 border border-solid border-highlight-border rounded px-3 text-base focus:outline-none ${className} ${errorClasses}`;
  return <input type="text" className={classes} {...props} />;
};

export default FBTextInput;
