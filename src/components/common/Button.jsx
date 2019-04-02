import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    const { value, onClick, className } = this.props;
    return (
      <button onClick={onClick} className={`commonButton ${className}`}>
        {value}
      </button>
    );
  }
}
