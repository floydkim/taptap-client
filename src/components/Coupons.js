import React, { Component } from 'react';
import CouponsDisplay from './CouponsDisplay';

export default class Coupons extends Component {
  render() {
    const { counts } = this.props;
    return (
      <div>
        <CouponsDisplay counts={counts} />
        <button>사용하기</button>
        <button>적립하기</button>
      </div>
    );
  }
}
