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
  //Takes the values in action and uses a switch statement to find out what to do with them
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    case "Reset": {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
}
const store = createStore(reducer);

var Index = () => {
  return (
    //The provider allows every component in the app to access the redux store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
