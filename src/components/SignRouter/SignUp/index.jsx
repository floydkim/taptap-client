import React, { Component } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import fetchPostData from '../../../utils/fetchPostData';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.passwordCheck = React.createRef();
    this.storeName = React.createRef();
    this.signUpResult = React.createRef();
    this.REQUIRED = React.createRef();
  }

  signUp = async () => {
    let result = {
      isSuccess: false
    };

    result = await fetchPostData('/stores/stores/signup-store', {
      email: this.email.current.value,
      password: this.password.current.value,
      name: this.storeName.current.value
    });

    // 이제 email로 storeID를 받아오면 된다.
    let { storeID } = await fetchPostData('/stores/stores/get-store-id', {
      email: this.email.current.value
    });
    // 받아온 storeID에 required 보상정보를 입력한다. 이건 응답 기다리지 않아도 됨.
    fetchPostData('/stores/rewards/insert-reward', {
      storeID: storeID,
      required: this.REQUIRED.current.value
    });

    if (result.isSuccess) {
      this.props.history.push('/');
    } else {
      this.signUpResult.current.innerText = '가입 실패';
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <h4 ref={signUpResult}>가입 결과</h4>
          </div>
          <div className="col-12">
            <input placeholder={'email ID'} type={'text'} ref={email} />
          </div>
          <div className="col-12">
            <input placeholder={'password'} type={'password'} ref={password} />
          </div>
          <div className="col-12">
            <input
              placeholder={'password'}
              type={'password'}
              ref={passwordCheck}
            />
          </div>
          <div className="col-12">
            <input
              placeholder={'운영중인 매장 이름을 입력하세요'}
              type={'text'}
              ref={storeName}
            />
          </div>
          <div className="col-12">
            <input
              placeholder={'몇 장 모아야 하나요?'}
              type={'text'}
              ref={REQUIRED}
            />
          </div>
          <div className="col-12">
            <Button value={'가입하기'} onClick={this.signUp} />
            <Button
              value={'돌아가기'}
              onClick={() => {
                this.props.history.push('/');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
