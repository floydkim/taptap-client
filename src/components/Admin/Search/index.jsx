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
      <div className="col-3 p-4">
        <div className="col-12 p-2">
          <Input
            onChange={e => {
              debouncedHandleOnChange(e.target.value);
            }}
            placeholder={'휴대폰 번호로 검색'}
            className={'w-100'}
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
