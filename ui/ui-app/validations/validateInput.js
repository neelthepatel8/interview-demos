import { VALIDATION } from "@/validations/validationRules";

export const validateInput = (name, value) => {
  const errors = {
    errorCount: 0,
    label: [],
    default: [],
    choices: [],
    displayAlpha: [],
    required: [],
  };

  switch (name) {
    case "label":
      if (!value) {
        errors.label.push(VALIDATION.LABEL.REQUIRED);
        errors.errorCount++;
      }
      break;
    case "choices":
      if (value.length > 50) {
        errors.choices.push(VALIDATION.CHOICES.MAX);
        errors.errorCount++;
      }
      if (value.length !== new Set(value).size) {
        errors.choices.push(VALIDATION.CHOICES.DUPLICATE);
        errors.errorCount++;
      }
  }
  return errors;
};
