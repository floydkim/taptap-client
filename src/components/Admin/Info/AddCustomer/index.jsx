import React, { Component } from 'react';
import Input from '../../../common/Input';
import Button from '../../../common/Button';
import './index.css';
import utils from '../../../../utils';

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      progress: '등록하기'
    };
    this.preventFetching = false;
  }

  handleOnClick = e => {
    let phoneNumber = e.nativeEvent.path[1].children[0].value;
    if (phoneNumber === 13) {
      this.setState({
        progress: '등록 중',
        phoneNumber
      });
      if (!this.preventFetching) {
        this.preventFetching = true;
        utils
          .fetchPostData('/stores/customers/insert-customer', {
            phoneNumber
          })
          .then(response => {
            if (response[1]) {
              // console.log('신규 등록에 성공했습니다.');
              this.setState({ progress: '등록 성공!' });
              // 성공시 이 회원의 쿠폰조회 화면으로 전환
              this.props.clickCustomer(response[0].id, this.state.phoneNumber);
            } else {
              // console.log('이미 등록된 회원입니다.');
              this.setState({ progress: '이미 등록된 회원입니다' });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log('아직 서버에서 응답이 오지 않았음');
      }
    } else {
      console.log('핸드폰 번호를 모두 입력해주세요 000-0000-0000');
    }
  };

  handleOnKeyDown = e => {
    if (e.nativeEvent.keyCode === 13) {
      let phoneNumber = e.nativeEvent.path[0].value;
      if (phoneNumber.length === 13) {
        this.setState({
          progress: '등록 중',
          phoneNumber
        });
        if (!this.preventFetching) {
          this.preventFetching = true;
          utils
            .fetchPostData('/stores/customers/insert-customer', {
              phoneNumber
            })
            .then(response => {
              if (response[1]) {
                // console.log('신규 등록에 성공했습니다.');
                this.setState({ progress: '등록 성공!' });
                // 성공시 이 회원의 쿠폰조회 화면으로 전환
                this.props.clickCustomer(
                  response[0].id,
                  this.state.phoneNumber
                );
              } else {
                // console.log('이미 등록된 회원입니다.');
                this.setState({ progress: '이미 등록된 회원입니다' });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log('아직 서버에서 응답이 오지 않았음');
        }
      } else {
        console.log('핸드폰 번호를 모두 입력해주세요 000-0000-0000');
      }
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
    const { handleOnClick, handleOnChange, handleOnKeyDown } = this;
    const { phoneNumber, progress } = this.state;
    return (
      <div className="addCustomer p-3">
        <Input
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          placeholder={'신규 고객의 핸드폰 번호를 입력'}
          value={phoneNumber}
          className={'form-control'}
        />
        <Button value={progress} onClick={handleOnClick} type={'text'} />
      </div>
    );
  }
}
