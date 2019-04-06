import React, { Component } from 'react';
import Button from '../../common/Button';
import fetchPostData from '../../../utils/fetchPostData';
import './index.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.passwordCheck = React.createRef();
    this.storeName = React.createRef();
    this.signUpResult = React.createRef();
    this.REQUIRED = React.createRef();
    this.failMessage = '가입 실패!';
  }

  signUp = async () => {
    let result = {
      isSuccess: false
    };

    if (this.checkPassword() && this.checkStoreName()) {
      result = await fetchPostData('/stores/stores/signup-store', {
        email: this.email.current.value,
        password: this.password.current.value,
        name: this.storeName.current.value
      });

      // 이제 email로 storeID를 받아오면 된다.
      if (this.email.current.value !== '') {
        let { storeID } = await fetchPostData('/stores/stores/get-store-id', {
          email: this.email.current.value
        });
        // 받아온 storeID에 required 보상정보를 입력한다. 이건 응답 기다리지 않아도 됨.
        fetchPostData('/stores/rewards/insert-reward', {
          storeID: storeID,
          required: this.REQUIRED.current.value
        });
      }
    }

    if (result.isSuccess) {
      this.props.history.push('/');
    } else {
      this.signUpResult.current.innerText = this.failMessage;
      this.signUpResult.current.className = 'signup-failed';
    }
  };

  checkPassword = () => {
    if (this.password.current.value !== this.passwordCheck.current.value) {
      this.failMessage = '비밀번호가 달라요!';
      this.signUpResult.current.className = 'signup-failed';
      return false;
    } else {
      // this.failMessage = '내용을 입력해주세요!';
      return true;
    }
  };

  checkStoreName = () => {
    if (
      this.storeName.current.value.length > 20 ||
      (this.storeName.current.value !== '' &&
        this.storeName.current.value.match(
          /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/
        ) === null)
    ) {
      this.failMessage = '특수문자는 안돼요!';
      this.signUpResult.current.className = 'signup-failed';
      return false;
    } else {
      // this.failMessage = '내용을 입력해주세요!';
      return true;
    }
  };

  render() {
    const {
      email,
      password,
      passwordCheck,
      storeName,
      signUpResult,
      REQUIRED
    } = this;

    return (
      <div className="container sign-layout">
        <div className="row p-4">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <h4 ref={signUpResult} className="signup">
              내용을 입력해주세요!
            </h4>
          </div>
          {/* //////// signup form start //////// */}
          <form
            id="signup-form"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <div className="col-12">
                <input
                  placeholder={'ID로 사용할 메일주소를 입력해주세요'}
                  type={'email'}
                  ref={email}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  placeholder={'비밀번호를 입력해주세요'}
                  type={'password'}
                  ref={password}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  placeholder={'비밀번호 확인'}
                  type={'password'}
                  ref={passwordCheck}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  placeholder={'운영중인 매장 이름을 입력하세요 (20자 이내)'}
                  type={'text'}
                  ref={storeName}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  placeholder={'몇 장 모아야 하나요?'}
                  type={'number'}
                  ref={REQUIRED}
                  className={'form-control'}
                  min={'2'}
                  max={'20'}
                  required
                />
              </div>
              <div className="col-12 mt-2">
                <Button
                  type={'submit'}
                  value={'가입하기'}
                  onClick={this.signUp}
                />
              </div>
            </div>
          </form>
          {/* //////////////// */}
          <Button
            value={'돌아가기'}
            onClick={() => {
              this.props.history.push('/');
            }}
            className={'button-back'}
          />
        </div>
      </div>
    );
  }
}

export default SignUp;
