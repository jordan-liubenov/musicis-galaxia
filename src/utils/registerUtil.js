export const toggleState = (state, stateFunc) => {
  stateFunc((state) => !state); //take the current value of state and set is as its opossite
};
