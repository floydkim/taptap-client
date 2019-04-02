import React, { Component } from 'react';
import Coupons from './Coupons';
import AddCustomer from './AddCustomer';

export default class Info extends Component {
  render() {
    const { isClickedAddCustomer, isClickedCustomer, counts } = this.props;
    return (
      <div className="col-9">
        {isClickedCustomer ? <Coupons counts={counts} /> : ''}
        {isClickedAddCustomer ? <AddCustomer /> : ''}
      </div>
    );
  }
}
