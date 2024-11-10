import { useState } from "react";
export function useReducer(reducer, initialValue) {
  const [state, setState] = useState(initialValue);
  const dispatch = (actions) => {
    const newState = reducer(state, actions);
    setState(newState);
  };
  return [state, dispatch];
}
