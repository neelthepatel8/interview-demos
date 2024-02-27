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

export const schedulealerts = (alerts, setalertBar) => {
  let cumulativeDelay = 0;

  alerts.forEach(({ message, styles, delay }) => {
    cumulativeDelay += delay;
    setTimeout(() => {
      setalertBar({
        show: true,
        message,
        styles,
      });
    }, cumulativeDelay);
  });
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
