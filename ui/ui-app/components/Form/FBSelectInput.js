import React, { useEffect, useState } from "react";
import Arrow from "../Icons/Arrow";

const FBSelectInput = ({
  options = [],
  onChange,
  valuekey,
  resetTrigger,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    setSelectedValue("");
  }, [resetTrigger]);

  const selectOption = (value) => {
    setSelectedValue(value);
    onChange(value.toLowerCase() == options[0].toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col w-full">
      <div
        onClick={toggleDropdown}
        className="flex flex-row h-11 min-w-full overflow-hidden cursor-pointer"
      >
        <div className="w-full flex items-center justify-between rounded-l border border-highlight-border bg-primary-bg dark:bg-dark-accent-bg-light dark:border-0 dark:drop-shadow-xl px-4">
          {selectedValue || "Select an option"}
        </div>
        <div className="px-3 py-3 bg-highlight-border-light rounded-r border dark:bg-dark-accent-bg dark:border-0 dark:drop-shadow-xl border-highlight-border cursor-pointer hover:bg-highlight-border dark:hover:bg-dark-accent-bg transition-all">
          <Arrow
            className={`w-5 h-5 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-10 z-10 w-full  dark:bg-dark-accent-bg-light dark:border-0 dark:drop-shadow-xl bg-white border border-highlight-border mt-1 max-h-60 overflow-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-accent-bg cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FBSelectInput;
