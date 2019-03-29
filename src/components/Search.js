import React, { Component } from 'react';
import Input from './Input';
import SearchResult from './SearchResult';
const fakeData = [
  { id: '1', phoneNumber: '010-7676-6479' },
  { id: '2', phoneNumber: '010-1234-6479' },
  { id: '4', phoneNumber: '010-789-6479' }
];
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fakeData
    };
  }
  handleOnChange = e => {
    console.log(e.target.value);
  };

  render() {
    const { handleOnChange } = this;
    const { data } = this.state;
    return (
      <div className="col-3">
        <Input onChange={handleOnChange} placeholder={'휴대폰 번호로 검색'} />
        <SearchResult data={data} />
      </div>
    );
  }
}
