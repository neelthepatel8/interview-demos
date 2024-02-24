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
