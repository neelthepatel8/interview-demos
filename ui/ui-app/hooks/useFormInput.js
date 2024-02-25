import { useReducer, useState } from "react";
import { REDUCER_ACTIONS } from "./hookConstants";
import { validateInput } from "@/validations/validateInput";
function formReducer(state, action) {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_FIELD:
      return { ...state, [action.field]: action.value };
    case REDUCER_ACTIONS.RESET_FIELD:
      return action.initialState;
    default:
      return state;
  }
}
export const useFormInput = (initialState, validate) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (field, value) => {
    if (validate) {
      const errors = validateInput(field, value);
      setErrors(errors);
    }
    dispatch({ type: REDUCER_ACTIONS.UPDATE_FIELD, field, value });
  };

  const handleReset = () => {
    dispatch({ type: REDUCER_ACTIONS.RESET_FIELD, initialState });
    setErrors({});
  };

  return [state, handleFieldChange, handleReset, errors];
};
