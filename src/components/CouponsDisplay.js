import React, { Component } from 'react';

export default class CouponsDisplay extends Component {
  render() {
    const { count, REQUIRED } = this.props.counts;
    const couponsArray = [];
    for (let i = 0; i < count; i++) {
      couponsArray.push(
        <img
          key={`checked ${i}`}
          src="https://img.icons8.com/ios/100/000000/warranty-filled.png"
        />
      );
    }
    for (let i = 0; i < REQUIRED - count; i++) {
      couponsArray.push(
        <img
          key={`unchecked ${i}`}
          src="https://img.icons8.com/ios/100/000000/warranty.png"
        />
      );
    }
    return (
      <div>
        {console.log(count, REQUIRED)}
        {couponsArray}
      </div>
    );
  }
}
