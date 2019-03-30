import React, { Component } from 'react';
import Input from '../../common/Input';
import SearchResult from './SearchResult';
import './index.css';

const fakeData = [
  { id: '1', phoneNumber: '010-7676-6479' },
  { id: '2', phoneNumber: '010-1234-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' },
  { id: '4', phoneNumber: '010-789-6479' }
];
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    };
    this.debouncedHandleOnChange = this.debounce(
      this.handleOnChange.bind(this),
      500
    );
  }

  debounce = (func, wait) => {
    let timer;
    return (...args) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => func(...args), wait);
    };
  };

  handleOnChange = val => {
    fetch('http://localhost:3001/stores/customers/get-all-customers', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(a => console.log(a));
  };

  render() {
    const { debouncedHandleOnChange } = this;
    const { data } = this.state;
    return (
      <div className="col-3">
        <Input
          onChange={e => {
            debouncedHandleOnChange(e.target.value);
          }}
          placeholder={'휴대폰 번호로 검색'}
        />
        <SearchResult data={data} />
      </div>
    );
  }
}
