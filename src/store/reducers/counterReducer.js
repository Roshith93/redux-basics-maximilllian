import * as actionType from "../actions/action-types";
import uuid from "uuid/v4";

const initialState = {
  counter: 0,
  results: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case actionType.ADDITION:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionType.SUBTRACTION:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionType.RESET:
      return {
        ...state,
        counter: (state.counter = 0)
      };
    case actionType.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({ id: uuid(), count: state.counter })
      };
    case actionType.DELETE_RESULTS:
      const updatedData = state.results.filter(
        result => result.id !== action.payload
      );
      return {
        ...state,
        results: updatedData
      };
    default:
      return state;
  }
};

export default counterReducer;
