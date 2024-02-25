import React from "react";
import FBTextInput from "../components/Form/FBTextInput";
import FBCheckboxInput from "../components/Form/FBCheckboxInput";
import FBTextArea from "../components/Form/FBTextArea";
import FBSelectInput from "../components/Form/FBSelectInput";
export const getComponentByType = (type) => {
  const componentMap = {
    text: FBTextInput,
    checkbox: FBCheckboxInput,
    textarea: FBTextArea,
    select: FBSelectInput,
  };
  return componentMap[type] || FBTextInput;
};

export const scheduleNotifications = (notifications, setNotificationBar) => {
  let cumulativeDelay = 0;

  notifications.forEach(({ message, styles, delay }) => {
    cumulativeDelay += delay;
    setTimeout(() => {
      setNotificationBar({
        show: true,
        message,
        styles,
      });
    }, cumulativeDelay);
  });
};
