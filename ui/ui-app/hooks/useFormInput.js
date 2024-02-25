import { useReducer, useState } from "react";
import { REDUCER_ACTIONS } from "./hookConstants";
import { validateInput } from "@/validations/validateInput";
function formReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case REDUCER_ACTIONS.RESET_FIELD:
      return action.initialState;
    case REDUCER_ACTIONS.UPDATE_CHOICES_WITH_DEFAULT:
      if (state.default == "") return state;
      const updatedChoices = state.choices.includes(state.default)
        ? [...state.choices]
        : [state.default, ...state.choices];
      return { ...state, choices: updatedChoices };
    case REDUCER_ACTIONS.SORT_CHOICES:
      if (state.displayAlpha) {
        const sortedChoices = state.choices.sort((a, b) => a.localeCompare(b));
        return { ...state, choices: sortedChoices };
      }
      return state;
    default:
      return state;
  }
}
export const useFormInput = (initialState, validate) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    dispatch({ type: REDUCER_ACTIONS.UPDATE_FIELD, field, value });

    if (validate) {
      const validationResults = validateInput(field, value);
      setErrors((prevErrors) => {
        const updatedErrors = {
          ...prevErrors,
          [field]: validationResults[field],
        };

        updatedErrors.errorCount = Object.keys(updatedErrors)
          .filter(
            (key) => key !== "errorCount" && updatedErrors[key].length > 0
          )
          .reduce((acc, key) => acc + updatedErrors[key].length, 0);

        return updatedErrors;
      });
    }
  };

  const handleReset = () => {
    dispatch({ type: REDUCER_ACTIONS.RESET_FIELD, initialState });
    setErrors({});
  };

  const updateChoicesWithDefault = () => {
    dispatch({ type: REDUCER_ACTIONS.UPDATE_CHOICES_WITH_DEFAULT });
  };

  const sortChoices = () => {
    dispatch({ type: REDUCER_ACTIONS.SORT_CHOICES });
  };

  const validateForm = () => {
    const newErrors = { errorCount: 0 };
    Object.keys(state).forEach((field) => {
      const validationResults = validateInput(field, state[field]);
      if (validationResults[field].length > 0) {
        newErrors[field] = validationResults[field];
        newErrors.errorCount += validationResults[field].length;
      }
    });

    setErrors(newErrors);
    return newErrors.errorCount === 0;
  };

  return [
    state,
    handleFieldChange,
    handleReset,
    errors,
    updateChoicesWithDefault,
    sortChoices,
    validateForm,
  ];
};
