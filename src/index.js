import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import Counter from "./counter.js";

//Import for the redux store
import { createStore } from "redux";

//Putting the redux store function return in one variable
const store = createStore();

var Index = () => {
  return <Counter number={41} />;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
