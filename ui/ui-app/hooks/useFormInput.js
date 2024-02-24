import { useReducer } from "react";
import { REDUCER_ACTIONS } from "./hookConstants";

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

export const useFormInput = (initialState) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleFieldChange = (field, value) => {
    dispatch({ type: REDUCER_ACTIONS.UPDATE_FIELD, field, value });
  };
  const handleReset = () => {
    dispatch({ type: REDUCER_ACTIONS.RESET_FIELD, initialState });
  };

  return [state, handleFieldChange, handleReset];
};
