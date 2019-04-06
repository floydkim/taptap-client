import React, { Component } from 'react';
import './index.css';

export default class CouponsDisplay extends Component {
  render() {
    const { count, REQUIRED } = this.props.counts;
    const couponsArray = [];
    for (let i = 0; i < count; i++) {
      couponsArray.push(
        <img key={`checked ${i}`} src="checked2.png" alt={`checked ${i}`} />
      );
    }
    for (let i = 0; i < REQUIRED - count; i++) {
      couponsArray.push(
        <img
          key={`unchecked ${i}`}
          src="unchecked2.png"
          alt={`unchecked ${i}`}
        />
      );
    }
    return (
      <div>
        <div id="couponsCountDisplay">
          <span id="couponsCountDisplay-span">{count}</span> / {REQUIRED}
        </div>
        <div className="couponsPaper p-2">{couponsArray}</div>
      </div>
    );
  }
}
