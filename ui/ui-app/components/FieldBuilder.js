"use client";

import React from "react";
import { useReducer } from "react";
import FBFormItem from "./Form/FBFormItem";
import Button from "./Generic/Button";
import FieldService from "../../js/MockService";
import { getComponentByType } from "@/utils/utils";
import formConfig from "@/config/formConfig";

const FieldBuilder = () => {
  const initialState = FieldService.getDefaults();
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  function formReducer(state, action) {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  }
  return (
    <div className="w-1/3 h-2/3 rounded-lg overflow-hidden border-highlight-light border-solid border-2">
      <div className="header font-bold text-lg text-highlight bg-highlight-light py-3 px-4">
        Field Builder
      </div>
      <div className="content w-full flex flex-col py-8 px-12 gap-8 text-base">
        {formConfig.map((item) => {
          const InputComponent = getComponentByType(item.type);
          return (
            <FBFormItem label={item.label} key={item.valueKey}>
              <InputComponent
                value={state[item.valueKey]}
                onChange={(e) =>
                  handleFieldChange(item.valueKey, e.target.value)
                }
                {...item}
              />
            </FBFormItem>
          );
        })}

        <div className="w-full flex flex-row">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <Button className={"bg-success-button text-primary-bg"}>
              Save Changes
            </Button>
            <span className="px-4">Or</span>
            <Button className={"bg-transperent text-cancel-button pl-0"}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldBuilder;
