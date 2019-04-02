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
      idObject
    } = this.props;
    return (
      <div className="col-9">
        가게 ID : {this.props.idObject.storeID}
        <br />
        {isClickedCustomer ? (
          <Coupons
            counts={counts}
            idObject={idObject}
            clickCustomer={clickCustomer}
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
