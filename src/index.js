import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import Counter from "./counter.js";
var Index = () => {
  return <Counter number={41} />;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
