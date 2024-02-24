import React from "react";
import FBLabel from "./FBLabel";

const FBFormItem = ({ label, children }) => {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      {label && <FBLabel text={label} className="w-1/4" />}
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default FBFormItem;
