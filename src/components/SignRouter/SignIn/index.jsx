import React, { Component } from 'react';
import Button from '../../common/Button';
import fetchPostData from '../../../utils/fetchPostData';
import './index.css';
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.signInResult = React.createRef();
  }

  onClick = async () => {
    let result = {
      isSuccess: false
    };

    result = await fetchPostData('/stores/stores/signin-store', {
      email: this.email.current.value,
      password: this.password.current.value
    });

    if (result.isSuccess) {
      this.props.history.push('/admin', { id: result.id });
    } else {
      this.signInResult.current.innerHTML = '로그인 실패!';
      this.signInResult.current.className = 'signin-failed';
    }
  };

  render() {
    return (
      <div className="container sign-layout">
        <div className="row p-4">
          <div className="col-12">
            <h1>꾹꾹이</h1>
            <img src="muzi.png" width="60" id="img-muzi" />
          </div>
          <div className="col-12">
            <h4 ref={this.signInResult} className="signin">
              로그인 해주세요!
            </h4>
          </div>
          <div className="col-12">
            <input
              placeholder={'email'}
              type={'text'}
              ref={this.email}
              className={'form-control'}
            />
          </div>
          <div className="col-12">
            <input
              placeholder={'password'}
              type={'password'}
              ref={this.password}
              className={'form-control'}
            />
          </div>
          <div className="col-12 mt-2">
            <Button value={'로그인'} onClick={this.onClick} />
            <Button
              value={'가입하기'}
              onClick={() => {
                this.props.history.push('/signUp');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
