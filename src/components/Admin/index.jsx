import React, { Component } from 'react';
import Search from './Search';
import Info from './Info';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // inital state
      isClickedAddCustomer: false,
      isClickedCustomer: false
    };
  }

  clickAddCustomer = () => {
    this.setState({
      isClickedAddCustomer: true,
      isClickedCustomer: false
    });
  };

  clickCustomer = id => {
    console.log(`id가 ${id}인 사용자를 클릭했음.`);
    // 이제 서버에 해당 id 사용자의 적립된 쿠폰 수를 가져와야 함.
    // 가져와서 state에 저장할 필요는 없고 id 랑 count 를 Info 컴포넌트에게 전달만 해주면 됨.
    this.setState({
      isClickedAddCustomer: false,
      isClickedCustomer: true
    });
  };

  render() {
    const { clickAddCustomer, clickCustomer } = this;
    const { isClickedAddCustomer, isClickedCustomer } = this.state;
    return (
      <div className="container outerHeight">
        <div className="row outerHeight">
          <Search
            clickAddCustomer={clickAddCustomer}
            clickCustomer={clickCustomer}
          />
          <Info
            isClickedAddCustomer={isClickedAddCustomer}
            isClickedCustomer={isClickedCustomer}
          />
        </div>
      </div>
    );
  }
}
