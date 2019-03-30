import React, { Component } from 'react';
import CouponsDisplay from './CouponsDisplay';
import Button from '../../../common/Button';
import './index.css';

export default class Coupons extends Component {
  render() {
    const { counts } = this.props;
    return (
      <div className="couponsDisplay">
        <CouponsDisplay counts={counts} />
        <Button value={'사용하기'} />
        <Button value={'적립하기'} />
      </div>
    );
  }
}
