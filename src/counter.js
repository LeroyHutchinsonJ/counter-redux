import React from "react";

//This imports the connect function from react redux
import { connect } from "react-redux";

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

//This takes the entire state  example (number : 42)
var mapStateToProps = state => ({
  number: state.number
});

//When you call connect, it returns a function which you then call with counter, which in turn returns a new component
export default connect(mapStateToProps)(Counter);
