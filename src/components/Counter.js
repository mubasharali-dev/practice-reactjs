import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count - {this.state.count} </h1>
        <button onClick={this.incrementCount}>Increment Count</button>
        <button onClick={this.decrementCount}>Decrement Count </button>
      </div>
    );
  }
}

export default Counter;
