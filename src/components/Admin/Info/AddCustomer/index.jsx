import React, { Component } from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import './index.css';

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  handleOnClick = () => {
    //fetch로 서버에 포스트요청
    console.log(this.state.input);
  };
  handleOnBlur = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    const { handleOnClick, handleOnBlur } = this;
    return (
      <div className="addCustomer">
        <Input
          onBlur={handleOnBlur}
          placeholder={'신규 고객의 핸드폰 번호를 입력'}
        />
        <Button value={'등록하기'} onClick={handleOnClick} type={'text'} />
      </div>
    );
  }
}
