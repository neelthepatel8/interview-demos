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
import { schedulealerts } from "@/utils/utils";

const FieldBuilder = () => {
  const initialState = FieldService.getDefaults();
  const [
    state,
    handleFieldChange,
    handleReset,
    errors,
    updateChoicesWithDefault,
    sortChoices,
    validateForm,
  ] = useFormInput(initialState, true);

  const [alertBar, setalertBar] = useState({
    show: false,
    message: "",
    styles: "",
  });

  useEffect(() => {
    if (errors.errorCount === 0) {
      setalertBar(false);
    }
  }, [errors]);

  const handleSave = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setalertBar({
        show: true,
        message: "The form still has some errors, please fix before saving.",
        styles: "bg-red-200 text-red-500",
      });
      return;
    }

    const alerts = [];

    if (errors.errorCount === 0) {
      const defaultInChoices =
        state.choices.filter(
          (c) => c.toLowerCase() === state.default.toLowerCase()
        ).length > 0;
      if (!defaultInChoices && state.default !== "") {
        if (state.choices.length >= 50) {
          alerts.push({
            message:
              "Cannot add default value to the choices list, list is full. (50 max)",
            styles: "bg-red-400 text-white",
            delay: 750,
          });
          schedulealerts(alerts, setalertBar);
          return;
        }
        alerts.push({
          message: "Added default value to the choices list.",
          styles: "bg-blue-400 text-white",
          delay: 750,
        });
      }
      if (state.displayAlpha == true && state.choices.length > 1) {
        alerts.push({
          message: "Sorted choices alphabetically.",
          styles: "bg-blue-400 text-white",
          delay: 750,
        });
      }

      updateChoicesWithDefault();
      sortChoices();

      alerts.push(
        {
          message: "Saving Data...",
          styles: "bg-yellow-500 text-white",
          delay: 750,
        },
        {
          message: "Data has been saved!",
          styles: "bg-green-500 text-white",
          delay: 750,
        }
      );

      schedulealerts(alerts, setalertBar);

      FieldService.saveField(state);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        "Are you sure you want to cancel\n(This will clear all form data!)?"
      )
    ) {
      handleReset();
      setalertBar({ show: false });
    }
  };

  return (
    <form
      onSubmit={handleSave}
      className="w-full xl:w-1/3 h-full xl:h-fit xl:rounded-lg overflow-hidden text-primary-text dark:text-dark-text bg-primary-bg dark:bg-dark-accent border-highlight-light dark:border-0 dark:drop-shadow-2xl border-0 xl:border-solid xl:border-2"
    >
      <div className="font-bold text-lg text-highlight dark:text-primary-bg bg-highlight-light dark:bg-dark-accent-bg py-3 px-4">
        Field Builder
      </div>
      <div className="w-full flex flex-col py-8 px-12 gap-8 text-base">
        {alertBar.show && (
          <div
            className={`w-full text-md py-2 px-5 rounded ${alertBar.styles}`}
          >
            {alertBar.message}
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
                error={errors[item.valuekey]}
              >
                <InputComponent
                  iserror={errors[item.valuekey]?.length > 0}
                  key={item.valuekey}
                  value={state[item.valuekey]}
                  onChange={handleChange}
                  {...item}
                />
              </FBFormItem>
            </div>
          );
        })}

        <div className="w-full flex flex-row ">
          <div className="hidden xl:block xl:ml-3 xl:w-1/4"></div>
          <div className="w-full xl:w-3/4">
            <button className="hidden bg-success-button text-cancel-button text-primary-bg">
              a
            </button>
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
