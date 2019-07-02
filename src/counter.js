import React from "react";

//This imports the connect function from react redux
import { connect } from "react-redux";

class Counter extends React.Component {

  
  //This function increases the number by 1
  onPlusClick = () => {
    this.props.dispatch({ type: "Increment" });
  };

  //This function decreases the number by 1
  onMinusClick = () => {
    this.props.dispatch({ type: "Decrement" });
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
