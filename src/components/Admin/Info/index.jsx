import React, { Component } from 'react';
import Coupons from './Coupons';
import Signup from './Signup';

const fakeData = { id: 1, count: 4 }; // 일단은 한 고객의 적립정보를 서버에서 받아온 것

const REQUIRED = 10; // 서버에서 받아온 개수임

export default class Info extends Component {
  render() {
    return (
      <div className="col-9">
        <Coupons counts={{ count: fakeData.count, REQUIRED }} />
        <Signup />
      </div>
    );
  }
}
