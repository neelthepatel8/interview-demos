import { VALIDATION } from "@/validations/validationRules";

export const validateInput = (name, value) => {
  const errors = {
    errorCount: 0,
    label: {},
    default: {},
    choices: {},
    displayAlpha: {},
    required: {},
  };

  switch (name) {
    case "label":
      if (!value) {
        errors.label.message = VALIDATION.LABEL.REQUIRED;
        errors.errorCount++;
      }
      break;
    default:
      return "";
  }
  return errors;
};
