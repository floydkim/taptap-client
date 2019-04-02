import React, { Component } from 'react';
import CouponsDisplay from './CouponsDisplay';
import Button from '../../../common/Button';
import './index.css';
import utils from '../../../../utils';

export default class Coupons extends Component {
  state = {
    isWaiting: false
  };

  onClickInsertCoupon = () => {
    const { customerID, storeID } = this.props.idObject;
    const { clickCustomer } = this.props;
    this.setState({ isWaiting: true });
    utils
      .fetchPostData('/stores/coupons/insert-coupon', {
        customerID,
        storeID
      })
      .then(() => {
        this.setState({ isWaiting: false });
        clickCustomer(customerID);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { onClickInsertCoupon } = this;
    const { isWaiting } = this.state;
    // const { count, REQUIRED } = this.props.counts;
    // const counts = { count, REQUIRED };
    const counts = this.props.counts;
    return (
      <div className="couponsDisplay">
        <CouponsDisplay counts={counts} />
        <Button value={'사용하기'} type={'text'} />
        <Button
          value={isWaiting ? '적립 중' : '적립하기'}
          type={'text'}
          onClick={onClickInsertCoupon}
        />
      </div>
    );
  }
}
