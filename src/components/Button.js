import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { value, onClick } = this.props;
    return <button onClick={onClick}>{value}</button>;
  }
}
