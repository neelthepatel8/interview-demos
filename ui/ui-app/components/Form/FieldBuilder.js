import React from "react";
import FBFormItem from "./FBFormItem";
import FBTextInput from "./FBTextInput";
import FBCheckboxInput from "./FBCheckboxInput";
import FBSelectInput from "./FBSelectInput";

const FieldBuilder = () => {
  return (
    <div className="w-1/3 h-2/3 rounded-lg overflow-hidden border-highlight-light border-solid border-2">
      <div className="header font-bold text-highlight bg-highlight-light py-3 px-4">
        Field Builder
      </div>
      <div className="content w-full flex flex-col py-8 px-8 gap-8">
        <FBFormItem label="Label">
          <FBTextInput placeholder="Sales Region" />
        </FBFormItem>

        <FBFormItem label="Type">
          <FBCheckboxInput title="Multi-select" label="A Value is required" />
        </FBFormItem>

        <FBFormItem label="Default Value">
          <FBTextInput placeholder="Asia" />
        </FBFormItem>

        <FBFormItem label="Choices">
          <FBSelectInput />
        </FBFormItem>

        <FBFormItem label="Order">
          <FBSelectInput />
        </FBFormItem>

        <div className="w-full flex flex-row">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <button className=" bg-success-button text-primary-bg font-bold py-2 px-4 rounded-lg border-0">
              Save Changes
            </button>
            <span className="px-4">Or</span>
            <button className=" bg-primary-bg text-cancel-button font-bold py-2 px-4 rounded-lg border-0">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldBuilder;
