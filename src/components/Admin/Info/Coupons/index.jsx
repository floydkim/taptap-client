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
        clickCustomer(customerID); // Admin 컴포넌트의 함수 호출
      })
      .catch(error => {
        console.log(error);
      });
  };

  onClickUseCoupon = () => {
    const { customerID, storeID } = this.props.idObject;
    const { clickCustomer } = this.props;
    utils
      .fetchPostData('/stores/coupons/use-coupons', {
        storeID,
        customerID
      })
      .then(() => {
        clickCustomer(customerID); // Admin 컴포넌트의 함수 호출
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { onClickInsertCoupon, onClickUseCoupon } = this;
    const { isWaiting } = this.state;
    const counts = this.props.counts;
    return (
      <div className="couponsDisplay">
        손님 ID : {this.props.idObject.customerID}
        <CouponsDisplay counts={counts} />
        <Button value={'사용하기'} type={'text'} onClick={onClickUseCoupon} />
        <Button
          value={isWaiting ? '적립 중' : '적립하기'}
          type={'text'}
          onClick={onClickInsertCoupon}
        />
      </div>
    );
  }
}
