import React from "react";

//This imports the connect function from react redux
import { connect } from "react-redux";

class Counter extends React.Component {
  //This function changes the action type to Increment
  onPlusClick = () => {
    this.props.dispatch({ type: "Increment" });
  };
  to;
  //This function changes the action type to Decrement
  onMinusClick = () => {
    this.props.dispatch({ type: "Decrement" });
  };

  //This function changes the action type to reset
  onResetClick = () => {
    this.props.dispatch({ type: "Reset" });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div className="container">
          <button className="minusBtn" onClick={this.onMinusClick}>
            <h2>-</h2>
          </button>
          <span className="numberCount">{this.props.count}</span>
          <button className="addBtn" onClick={this.onPlusClick}>
            <h2>+</h2>
          </button>
        </div>
        <button className="resetBtn" onClick={this.onResetClick}>
          <h2> Reset</h2>
        </button>
      </div>
    );
  }
}

//This takes the entire state  example (count : 42)
const mapStateToProps = state => ({
  count: state.count
});

//When you call connect, it returns a function which you then call with counter, which in turn returns a new component
export default connect(mapStateToProps)(Counter);
