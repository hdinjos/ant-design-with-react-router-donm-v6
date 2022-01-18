import { SET_DECREMENT, SET_INCREMENT } from "../type/counter";

const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case SET_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}