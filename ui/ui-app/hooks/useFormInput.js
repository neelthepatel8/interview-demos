import { useReducer, useState, useEffect } from "react";
import { REDUCER_ACTIONS } from "./hookConstants";
import { validateInput } from "@/validations/validateInput";
import { useCookies } from "@/hooks/useCookies";

function formReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case REDUCER_ACTIONS.RESET_FIELD:
      return action.initialState;
    case REDUCER_ACTIONS.UPDATE_CHOICES_WITH_DEFAULT:
      if (state.default == "") return state;

      const updatedChoices = state.choices
        .map((c) => c.toLowerCase())
        .includes(state.default.toLowerCase())
        ? [...state.choices]
        : [state.default, ...state.choices];
      return { ...state, choices: updatedChoices };
    case REDUCER_ACTIONS.SORT_CHOICES:
      if (state.displayAlpha == true && state.choices.length > 1) {
        const sortedChoices = state.choices.sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        return { ...state, choices: sortedChoices };
      }
      return state;
    default:
      return state;
  }
}
export const useFormInput = (initialState, validate) => {
  const { get: getCookie, set: setCookie } = useCookies();
  const initialStateFromCookies = Object.keys(initialState).reduce(
    (accum, key) => {
      const cookieValue = getCookie(key);
      accum[key] = cookieValue ? JSON.parse(cookieValue) : initialState[key];
      return accum;
    },
    {}
  );

  const [state, dispatch] = useReducer(formReducer, initialStateFromCookies);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      Object.keys(state).forEach((key) => {
        setCookie(key, JSON.stringify(state[key]), 7);
      });
    }
  }, [state, setCookie]);

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
