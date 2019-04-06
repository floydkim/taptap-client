import React, { Component } from 'react';
import CouponsDisplay from './CouponsDisplay';
import Button from '../../../common/Button';
import './index.css';
import utils from '../../../../utils';
import iziToast from 'izitoast';

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false,
      message: '좋은 하루 되세요!',
      messageClassName: 'couponsMessage'
    };
    this.preventFetching = false;
    // 토스트 얼럿 기본세팅
    iziToast.settings({
      timeout: 5000,
      resetOnHover: false,
      icon: 'material-icons',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      messageSize: 15,
      titleSize: 20,
      position: 'topRight'
    });
  }

  onClickInsertCoupon = () => {
    const { customerID, storeID, phoneNumber } = this.props.idObject;
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
          this.setState({
            isWaiting: false,
            message: '쿠폰이 적립되었습니다!',
            messageClassName: 'couponsMessage-used'
          });
          iziToast.success({
            title: 'OK',
            message: '쿠폰이 적립되었습니다!'
          });
          setTimeout(() => {
            this.setState({
              message: '좋은 하루 되세요!',
              messageClassName: 'couponsMessage'
            });
          }, 3000);
          clickCustomer(customerID, phoneNumber); // Admin 컴포넌트의 함수 호출
          this.preventFetching = false;
        })
        .catch(error => {
          console.log(error);
          this.setState({
            isWaiting: false,
            message: '쿠폰 적립에 실패했습니다',
            messageClassName: 'couponsMessage-fail'
          });
        });
    } else {
      console.log('아직 서버에서 응답이 오지 않았음');
    }
  };

  onClickUseCoupon = () => {
    const { customerID, storeID, phoneNumber } = this.props.idObject;
    const { clickCustomer } = this.props;
    this.setState({ isWaiting: true });
    if (!this.preventFetching) {
      this.preventFetching = true;
      utils
        .fetchPostData('/stores/coupons/use-coupons', {
          storeID,
          customerID
        })
        .then(() => {
          this.setState({
            isWaiting: false,
            message: '쿠폰이 사용 처리 되었습니다.',
            messageClassName: 'couponsMessage-used'
          });
          iziToast.success({
            title: '와!',
            message: '쿠폰이 사용 처리 되었습니다!'
          });
          setTimeout(() => {
            this.setState({
              message: '좋은 하루 되세요!',
              messageClassName: 'couponsMessage'
            });
          }, 3000);
          clickCustomer(customerID, phoneNumber); // Admin 컴포넌트의 함수 호출
          this.preventFetching = false;
        })
        .catch(error => {
          this.setState({
            isWaiting: false,
            message: '쿠폰 사용 실패!',
            messageClassName: 'couponsMessage-fail'
          });
          console.log(error);
        });
    } else {
      console.log('아직 서버에서 응답이 오지 않았음');
    }
  };

  onClickNotFulfilled = () => {
    const { count, REQUIRED } = this.props.counts;
    iziToast.error({
      title: '앗!',
      message: `쿠폰이 ${REQUIRED - count}개 부족합니다!`
    });
    this.setState({
      message: `쿠폰이 ${REQUIRED - count}개 부족합니다!`,
      messageClassName: 'couponsMessage-fail'
    });
    setTimeout(() => {
      this.setState({
        message: '좋은 하루 되세요!',
        messageClassName: 'couponsMessage'
      });
    }, 3000);
  };

  render() {
    const { onClickInsertCoupon, onClickUseCoupon, onClickNotFulfilled } = this;
    const { isWaiting, message, messageClassName } = this.state;
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
          <Button
            value={`필요개수: ${counts.REQUIRED}개`}
            type={'text'}
            onClick={onClickNotFulfilled}
          />
        )}
        <Button
          value={isWaiting ? '적립 중' : '적립하기'}
          type={'text'}
          onClick={onClickInsertCoupon}
        />
        <div className={messageClassName} id="messagebox">
          {message}
        </div>
      </div>
    );
  }
}
