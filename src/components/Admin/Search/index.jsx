import React, { Component } from 'react';
import Input from '../../common/Input';
import SearchResult from './SearchResult';
import { Map, List } from 'immutable';
import './index.css';
import utils from '../../../utils';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: List([])
    };
    this.debouncedHandleOnChange = this.debounce(
      this.handleOnChange.bind(this),
      0
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
    if (val.length === 4) {
      utils
        .fetchPostData('/stores/customers/find-last-number', {
          phoneNumber: val
        })
        .then(users => {
          let list = List([]);
          users.forEach(user => {
            list = list.push(Map(user));
          });
          this.setState({
            data: list
          });
        });
    } else if (val.length === 0) {
      this.setState({
        data: List([])
      });
    }
  };

  render() {
    const { debouncedHandleOnChange } = this;
    const { data } = this.state;
    const { clickAddCustomer, clickCustomer } = this.props;
    return (
      <div className="col-4 p-4">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img
                src="https://img.icons8.com/metro/26/000000/phone.png"
                width="16"
                alt="phone number"
              />
            </span>
          </div>
          <Input
            onChange={e => {
              debouncedHandleOnChange(e.target.value);
            }}
            placeholder={'휴대폰 번호 뒷자리 검색'}
            className={'form-control'}
            type={'text'}
          />
        </div>
        <SearchResult
          data={data}
          clickAddCustomer={clickAddCustomer}
          clickCustomer={clickCustomer}
        />
      </div>
    );
  }
}
