import React, { Component } from 'react';
import Coupons from './Coupons';
import AddCustomer from './AddCustomer';

export default class Info extends Component {
  render() {
    const {
      isClickedAddCustomer,
      isClickedCustomer,
      clickCustomer,
      counts,
      idObject,
      phoneNumber
    } = this.props;
    return (
      <div className="col-8 p-4">
        <div>
          <span id="span-storeName">{idObject.storeName}</span> 사장님 하이!
          (가게 ID : {idObject.storeID})
        </div>
        {isClickedCustomer ? (
          <Coupons
            counts={counts}
            idObject={idObject}
            clickCustomer={clickCustomer}
            phoneNumber={phoneNumber}
          />
        ) : (
          ''
        )}
        {isClickedAddCustomer ? (
          <AddCustomer clickCustomer={clickCustomer} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
