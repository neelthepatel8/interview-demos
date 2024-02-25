import React from "react";

const FBCheckboxInput = ({
  title,
  checkboxLabel,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      {title && <label>{title}</label>}
      <div className="flex flex-row items-center gap-2">
        <input
          {...props}
          checked={value || false}
          onChange={(e) => onChange(e)}
          type="checkbox"
          className={` appearance-none h-5 w-5 border dark:border-0 dark:drop-shadow-2xl dark:bg-dark-bg rounded cursor-pointer  ${
            value ? "bg-blue-500 " : "bg-transparent"
          }`}
        />
        {checkboxLabel && (
          <label className="text-gray-600 dark:text-dark-text">
            {checkboxLabel}
          </label>
        )}
      </div>
    </div>
  );
};

export default FBCheckboxInput;
