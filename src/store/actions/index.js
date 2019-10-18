import * as actionTypes from "./action-types";

export const increment = val => {
  console.log("clicking here", val);
  return {
    type: actionTypes.INCREMENT,
    payload: val
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
    payload: 1
  };
};

export const addition = () => {
  return {
    type: actionTypes.ADDITION,
    payload: 5
  };
};

export const subtraction = () => {
  return {
    type: actionTypes.SUBTRACTION,
    payload: 5
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET,
    payload: 0
  };
};

export const storeResults = val => {
  return {
    type: actionTypes.STORE_RESULTS,
    payload: val
  };
};

export const deleteResults = id => {
  return {
    type: actionTypes.DELETE_RESULTS,
    payload: id
  };
};
