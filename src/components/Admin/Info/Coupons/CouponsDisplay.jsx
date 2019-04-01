import React, { Component } from 'react';

export default class CouponsDisplay extends Component {
  constructor(props) {
    super(props);
    const { count, REQUIRED } = props.counts;
    this.state = {
      count,
      REQUIRED
    };
  }
  render() {
    const { count, REQUIRED } = this.state;
    const couponsArray = [];
    for (let i = 0; i < count; i++) {
      couponsArray.push(
        <img
          key={`checked ${i}`}
          src="https://img.icons8.com/ios/100/000000/warranty-filled.png"
          alt={`checked ${i}`}
        />
      );
    }
    for (let i = 0; i < REQUIRED - count; i++) {
      couponsArray.push(
        <img
          key={`unchecked ${i}`}
          src="https://img.icons8.com/ios/100/000000/warranty.png"
          alt={`unchecked ${i}`}
        />
      );
    }
    return <div>{couponsArray}</div>;
  }
}
