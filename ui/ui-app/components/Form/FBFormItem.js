import React from "react";
import FBLabel from "./FBLabel";

const FBFormItem = ({ label, children, className, error, ...props }) => {
  const classes = `flex flex-row w-full justify-center items-center  ${className}`;
  return (
    <div className={classes}>
      {label && <FBLabel text={label} className="w-1/4" />}
      <div className="w-3/4 flex flex-row items-center justify-start gap-4">
        <div className="w-2/3">{children}</div>
        {error && (
          <div className="text-red-500 text-sm py-1 w-1/3">{error}</div>
        )}
      </div>
    </div>
  );
};

export default FBFormItem;
