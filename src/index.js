import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import Counter from "./counter.js";
//Import for the redux store
import { createStore } from "redux";
//This plugs the store into the connect function
import { Provider } from "react-redux";

const initialState = {
  count: 42
};

//This reducer function can return the initial state and change it
function reducer(state = initialState, action) {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}
const store = createStore(reducer);

//Passes in values to action
store.dispatch({ type: "Increment" });

var Index = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
