import React, { Component } from 'react';
import CouponsDisplay from './CouponsDisplay';
import Button from '../../../common/Button';
import './index.css';
import utils from '../../../../utils';

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false
    };
    this.preventFetching = false;
  }

  onClickInsertCoupon = () => {
    const { customerID, storeID } = this.props.idObject;
    const { clickCustomer } = this.props;
    this.setState({ isWaiting: true });
    if (!this.preventFetching) {
      this.preventFetching = true;
      utils
        .fetchPostData('/stores/coupons/insert-coupon', {
          customerID,
          storeID
        })
        .then(() => {
          this.setState({ isWaiting: false });
          clickCustomer(customerID); // Admin 컴포넌트의 함수 호출
          this.preventFetching = false;
        })
        .catch(error => {
          console.log(error);
          this.preventFetching = false;
        });
    } else {
      console.log('아직 서버에서 응답이 오지 않았음');
    }
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
      <div className="couponsDisplay p-3">
        <span className="couponsDisplay-phoneNumber">
          {this.props.idObject.phoneNumber}
        </span>
        <div>(손님 ID: {this.props.idObject.customerID})</div>
        <CouponsDisplay counts={counts} />
        {counts.count >= counts.REQUIRED ? (
          <Button value={'사용하기'} type={'text'} onClick={onClickUseCoupon} />
        ) : (
          <Button value={`필요개수: ${counts.REQUIRED}개`} type={'text'} />
        )}
        <Button
          value={isWaiting ? '적립 중' : '적립하기'}
          type={'text'}
          onClick={onClickInsertCoupon}
        />
      </div>
    );
  }
}
