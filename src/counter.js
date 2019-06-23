import React from "react";

class Counter extends React.Component {
  //This controls the current number in the counter
  state = {
    number: 0
  };

  //This function increases the number by 1
  onPlusClick = () => {
    //Fill in later
  };

  //This function decreases the number by 1
  onMinusClick = () => {
    //Fill in later
  };

  render() {
    var { number } = this.props;

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

export default Counter;
