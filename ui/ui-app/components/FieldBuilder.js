"use client";

import React from "react";
import { useReducer } from "react";
import FBFormItem from "./Form/FBFormItem";
import Button from "./Generic/Button";
import FieldService from "../../js/MockService";
import { getComponentByType } from "@/utils/utils";
import formConfig from "@/config/formConfig";
import { BUTTON_STYLES } from "@/constants/styleConstants";
import { useFormInput } from "@/hooks/useFormInput";

const FieldBuilder = () => {
  const initialState = FieldService.getDefaults();
  const [state, handleFieldChange, handleReset] = useFormInput(initialState);

  function formReducer(state, action) {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  }

  const handleSave = (e) => {
    e.preventDefault();
    const data = JSON.stringify(state);
    console.log("Saving data...");
    console.log(state);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        "Are you sure you want to cancel\n(This will clear all form data!)?"
      )
    ) {
      handleReset();
    }
  };

  return (
    <form
      onSubmit={handleSave}
      className="w-1/3 h-2/3 rounded-lg overflow-hidden border-highlight-light border-solid border-2"
    >
      <div className="header font-bold text-lg text-highlight bg-highlight-light py-3 px-4">
        Field Builder
      </div>
      <div className="content w-full flex flex-col py-8 px-12 gap-8 text-base">
        {formConfig.map((item) => {
          const InputComponent = getComponentByType(item.type);

          const handleChange =
            item.type === "textarea"
              ? (e) =>
                  handleFieldChange(item.valuekey, e.target.value.split("\n"))
              : item.type === "checkbox"
              ? (e) => handleFieldChange(item.valuekey, e.target.checked)
              : (e) => handleFieldChange(item.valuekey, e.target.value);

          return (
            <FBFormItem
              label={item.label}
              key={item.valuekey}
              className={item.override_classes || ""}
            >
              <InputComponent
                key={item.valuekey}
                value={state[item.valuekey]}
                onChange={handleChange}
                {...item}
              />
            </FBFormItem>
          );
        })}

        <div className="w-full flex flex-row">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <Button
              type="submit"
              ariaLabel="Save Changes"
              className={BUTTON_STYLES.SUCCESS}
            >
              Save Changes
            </Button>
            <span className="pl-4">Or</span>
            <Button
              onClick={handleCancel}
              ariaLabel="Cancel"
              className={BUTTON_STYLES.CANCEL}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FieldBuilder;
