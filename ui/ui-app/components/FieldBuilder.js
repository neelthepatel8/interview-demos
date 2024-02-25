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
import { scheduleNotifications } from "@/utils/utils";

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

  const [notificationBar, setNotificationBar] = useState({
    show: false,
    message: "",
    styles: "",
  });

  useEffect(() => {
    if (errors.errorCount === 0) {
      setNotificationBar(false);
    }
  }, [errors]);

  const handleSave = (e) => {
    e.preventDefault();

    validateForm();

    const notifications = [];

    if (errors.errorCount === 0) {
      const defaultInChoices = state.choices.includes(state.default);
      if (
        !defaultInChoices &&
        state.choices.length > 0 &&
        state.default !== ""
      ) {
        notifications.push({
          message: "Added default value to the choices list.",
          styles: "bg-blue-400 text-white",
          delay: 3000,
        });
      }
      if (state.displayAlpha == true && state.choices.length > 1) {
        notifications.push({
          message: "Sorted choices alphabetically.",
          styles: "bg-blue-400 text-white",
          delay: 3000,
        });
      }

      updateChoicesWithDefault();
      sortChoices();

      notifications.push(
        {
          message: "Saving Data...",
          styles: "bg-yellow-500 text-white",
          delay: 3000,
        },
        {
          message: "Data has been saved!",
          styles: "bg-green-500 text-white",
          delay: 3000,
        }
      );

      scheduleNotifications(notifications, setNotificationBar);

      FieldService.saveField(state);
      return;
    }

    setNotificationBar({
      show: true,
      message: "The form still has some errors, please fix before saving.",
      styles: "bg-red-200 text-red-500",
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        "Are you sure you want to cancel\n(This will clear all form data!)?"
      )
    ) {
      handleReset();
      setNotificationBar({ show: false });
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
        {notificationBar.show && (
          <div
            className={`w-full text-md py-2 px-5 rounded ${notificationBar.styles}`}
          >
            {notificationBar.message}
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
