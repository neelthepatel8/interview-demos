import React from "react";
import FBLabel from "./FBLabel";

const FBFormItem = ({ label, children, className }) => {
  const classes = `flex flex-row w-full justify-center items-center ${className}`;
  return (
    <div className={classes}>
      {label && <FBLabel text={label} className="w-1/4" />}
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default FBFormItem;
