import React, { Component } from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import './index.css';
import utils from '../../../../utils';

export default class AddCustomer extends Component {
  state = {
    phoneNumber: '',
    progress: '등록하기'
  };

  handleOnClick = e => {
    if (e.nativeEvent.path[1].children[0].value.length === 13) {
      this.setState({ progress: '등록 중' });
      utils
        .fetchPostData('/stores/customers/insert-customer', {
          phoneNumber: e.nativeEvent.path[1].children[0].value
        })
        .then(response => {
          if (response[1]) {
            // console.log('신규 등록에 성공했습니다.');
            this.setState({ progress: '등록 성공!' });
            // 성공시 이 회원의 쿠폰조회 화면으로 전환
            this.props.clickCustomer(response[0].id);
          } else {
            // console.log('이미 등록된 회원입니다.');
            this.setState({ progress: '있는 회원!' });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('핸드폰 번호를 모두 입력해주세요 000-0000-0000');
    }
  };

  handleOnChange = e => {
    const inputText = e.nativeEvent.target.value;
    const { phoneNumber } = this.state;

    if (phoneNumber.length <= inputText.length) {
      if (inputText.length === 3 || inputText.length === 8) {
        this.setState({ phoneNumber: inputText + '-' });
      } else {
        this.setState({
          phoneNumber: inputText
        });
      }
    } else {
      this.setState({
        phoneNumber: inputText
      });
    }
  };

  render() {
    const { handleOnClick, handleOnChange } = this;
    const { phoneNumber, progress } = this.state;
    return (
      <div className="addCustomer">
        <Input
          onChange={handleOnChange}
          placeholder={'신규 고객의 핸드폰 번호를 입력'}
          value={phoneNumber}
        />
        <Button value={progress} onClick={handleOnClick} type={'text'} />
      </div>
    );
  }
}
