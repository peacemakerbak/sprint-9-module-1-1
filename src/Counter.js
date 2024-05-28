
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: 1,
    };
  }

  handleIncrementChange = (event) => {
    this.setState({ increment: Number(event.target.value) });
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.increment,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h1>Counter: {this.state.count}</h1>
        <input
          type="number"
          value={this.state.increment}
          onChange={this.handleIncrementChange}
          placeholder="Enter increment value"
        />
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
