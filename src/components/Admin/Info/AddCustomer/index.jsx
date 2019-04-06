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
    this.inputPhoneNumber = '';
  }

  handleOnClick = e => {
    let phoneNumber = e.nativeEvent.path[1].children[0].value;
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
              this.props.clickCustomer(response[0].id, this.state.phoneNumber);
              this.preventFetching = false;
            } else {
              // console.log('이미 등록된 회원입니다.');
              this.setState({ progress: '이미 등록된 회원입니다' });
              this.preventFetching = false;
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log('아직 서버에서 응답이 오지 않았음');
      }
    } else {
      console.log('형식에 맞게 입력해주세요 010-0000-0000');
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
    console.log('----------------------');
    console.log('state : ', phoneNumber);
    console.log('input : ', inputText);
    if (phoneNumber.length <= inputText.length) {
      // if (inputText.length === 3 || inputText.length === 8) {
      if (
        (inputText[3] !== undefined && inputText[3] !== '-') ||
        (inputText[8] !== undefined && inputText[8] !== '-')
      ) {
        // this.setState({ phoneNumber: inputText + '-' });
        this.setState({
          phoneNumber:
            inputText.slice(0, 3) +
            '-' +
            inputText.slice(4, 8) +
            '-' +
            inputText.slice(9)
        });
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
        등록하실 손님의 핸드폰 번호를 모두 입력해주세요!
        {/* type tel 로 거를수있는지 form태그랑 form-control 클래스(부트스트랩) 적용할 것!!  */}
        <Input
          type={'tel'}
          onChange={e => {
            if (e.nativeEvent.data >= '0' && e.nativeEvent.data <= '9') {
              if (e.target.value.length < 14) {
                handleOnChange(e);
              }
            }
          }}
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
