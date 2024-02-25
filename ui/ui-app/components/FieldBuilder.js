"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import FBFormItem from "./Form/FBFormItem";
import Button from "./Generic/Button";
import FieldService from "../../js/MockService";
import { getComponentByType } from "@/utils/utils";
import formConfig from "@/config/formConfig";
import { BUTTON_STYLES } from "@/constants/styleConstants";
import { useFormInput } from "@/hooks/useFormInput";

const FieldBuilder = () => {
  const initialState = FieldService.getDefaults();
  const [state, handleFieldChange, handleReset, errors] = useFormInput(
    initialState,
    true
  );
  const [topErrorBar, setTopErrorBar] = useState(false);

  useEffect(() => {
    if (errors.errorCount === 0) {
      setTopErrorBar(false);
    }
  }, [errors]);

  const handleSave = (e) => {
    e.preventDefault();

    if (errors.errorCount === 0) {
      const data = JSON.stringify(state);
      console.log("Saving data...");
      console.log(state);
      return;
    }

    setTopErrorBar(true);
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
      className="w-1/3 h-fit rounded-lg overflow-hidden border-highlight-light border-solid border-2"
    >
      <div className="header font-bold text-lg text-highlight bg-highlight-light py-3 px-4">
        Field Builder
      </div>
      <div className="content w-full flex flex-col py-8 px-12 gap-8 text-base">
        {topErrorBar && (
          <div className="w-full text-cancel-button bg-red-100 text-md py-2 px-5 rounded">
            The form still has some errors, please fix before saving.
          </div>
        )}
        {formConfig.map((item) => {
          const InputComponent = getComponentByType(item.type);

          const handleChange = (e) => {
            const { type, valuekey } = item;
            let value;

            switch (type) {
              case "textarea":
                value = e.target.value.split("\n");
                break;
              case "checkbox":
                value = e.target.checked;
                break;
              case "select":
                value = e;
                break;
              default:
                value = e.target.value;
            }

            handleFieldChange(valuekey, value);
          };

          return (
            <div className="w-full" key={item.valuekey}>
              <FBFormItem
                label={item.label}
                key={item.valuekey}
                className={item.override_classes || ""}
                error={errors[item.valuekey]?.message}
              >
                <InputComponent
                  iserror={errors[item.valuekey]?.message}
                  key={item.valuekey}
                  value={state[item.valuekey]}
                  onChange={handleChange}
                  {...item}
                />
              </FBFormItem>
            </div>
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
