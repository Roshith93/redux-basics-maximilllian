import { createStore } from "redux";

// reducer
const initilState = {
  name: ""
};

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case 'NAME':
      return{
        ...state,
        name: action.payload
      }
  
    default: return state
  }
};

// store
const store = createStore(reducer);

// subscription
store.subscribe(() => {
  console.log("sttae", store.getState())
})

// action creator
const getName = () => {
  return{
    type:'NAME',
    payload: "Roshith"
  }
}
// dispatch
store.dispatch(getName())