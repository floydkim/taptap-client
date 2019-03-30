import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { value, onClick, className } = this.props;
    return (
      <button onClick={onClick} className={className}>
        {value}
      </button>
    );
  }
}
