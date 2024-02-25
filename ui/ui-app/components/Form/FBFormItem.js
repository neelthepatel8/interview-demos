import React from "react";
import FBLabel from "./FBLabel";

const FBFormItem = ({ label, children, className, error, ...props }) => {
  const classes = `flex flex-col xl:flex-row w-full justify-center items-start xl:items-center gap-3 ${className}`;
  return (
    <div className={classes}>
      {label && <FBLabel text={label} className="w-full xl:w-1/4" />}
      <div className="w-full xl:w-3/4 flex flex-row items-center justify-start gap-4">
        <div className="w-full xl:w-2/3">{children}</div>
        {error && (
          <div className="text-red-500 text-sm py-1 w-full xl:w-1/3 flex flex-col items-start justify-center gap-2">
            {error.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FBFormItem;
