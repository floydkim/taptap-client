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
    this.four = '';
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
              <img src="/phone.png" width="16" alt="phone number" />
            </span>
          </div>
          <Input
            onChange={e => {
              if (e.nativeEvent.data >= '0' && e.nativeEvent.data <= '9') {
                if (e.target.value.length <= 4) {
                  this.four = e.target.value;
                }
                if (e.target.value.length === 4) {
                  debouncedHandleOnChange(e.target.value);
                } else if (e.target.value.length > 4) {
                  e.target.value = this.four;
                }
              } else {
                e.target.value = this.four;
              }
            }}
            placeholder={'휴대폰 번호 뒷자리 검색'}
            className={'form-control'}
            type={'text'} // number로 받으면 스트링이 아니라서 length기반 판단이 안됨 ㅠㅠ
            // min={'0'}
            // max={'9999'}
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
