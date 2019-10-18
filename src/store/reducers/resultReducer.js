import * as actionType from "../actions/action-types";
import uuid from "uuid/v4";

const initialState = {
  results: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({
          id: uuid(),
          count: action.payload
        })
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
