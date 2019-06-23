import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";

class Counter extends React.Component {
  //This controls the current number in the counter
  state = {
    number: 0
  };

  //This function increases the number by 1
  onPlusClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  //This function decreases the number by 1
  onMinusClick = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    var { number } = this.state;

    return (
      <div className="App">
        <h1>Counter</h1>
        <div className="container">
          <button className="minusBtn" onClick={this.onMinusClick}>
            <h2>-</h2>
          </button>
          <span className="numberCount">{number}</span>
          <button className="addBtn" onClick={this.onPlusClick}>
            <h2>+</h2>
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
