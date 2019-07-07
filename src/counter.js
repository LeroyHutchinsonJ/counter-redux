import React from "react";

//This imports the connect function from react redux
import { connect } from "react-redux";

//Import vars that hold strings
import { INCREMENT, DECREMENT, RESET } from "./actions";

class Counter extends React.Component {
  //This function changes the action type to Increment
  onPlusClick = () => {
    this.props.INCREMENT();
  };
  //This function changes the action type to Decrement
  onMinusClick = () => {
    this.props.DECREMENT();
  };

  //This function changes the action type to reset
  onResetClick = () => {
    this.props.dispatch({ type: RESET });
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

//This is a function that takes a state and sets it to counter
const mapStateToProps = state => ({ count: state.count });

//
const mapDispatchToProps = {
  INCREMENT,
  DECREMENT,
  RESET
};
//When you call connect, what it does is it looks into redux, takes out the state and passes it to mapStateToProps, then mapStateToProps picks what it needs out of state and sends it to the Counter Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
