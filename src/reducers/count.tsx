import { useReducer } from "react";
import { InitialState, AnyAction, ActionType } from "../models/count";

const initialState: InitialState = {
  country: "Kenya",
  mode: "Organizing State",
  count: 15,
};

const reducer = (state: InitialState = initialState, action: AnyAction) => {
  if (action.type === ActionType.increment) {
    return { ...state, mode: action.mode, count: state.count + 1 };
  }
  if (action.type === ActionType.decrement) {
    return { ...state, mode: action.mode, count: state.count - 1 };
  }

  return state;
};

const CountReducer = () => {
  return useReducer(reducer, initialState);
};

export default CountReducer;
