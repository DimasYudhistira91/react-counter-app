import React, { Component } from 'react';
import { link } from 'fs';

class Counter extends Component {
  state = {
    count: 0
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log('increment clicked', this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = '';
    classes += this.state.count === 0 ? 'badge m-2 badge-warning' : 'badge m-2 badge-primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}

export default Counter;