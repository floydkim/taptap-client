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
      localStorage.setItem('userID', JSON.stringify(result.id));
      this.props.history.push('/admin');
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
            <img src="muzi.png" width="60" id="img-muzi" alt="welcome" />
          </div>
          <div className="col-12">
            <h4 ref={this.signInResult} className="signin">
              로그인 해주세요!
            </h4>
          </div>
          <form
            id="signin-form"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <div className="col-12">
                <input
                  placeholder={'ID : 메일 주소'}
                  type={'text'}
                  ref={this.email}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  placeholder={'비밀번호'}
                  type={'password'}
                  ref={this.password}
                  className={'form-control'}
                  required
                />
              </div>
              <div className="col-12 mt-2">
                <Button value={'로그인'} onClick={this.onClick} />
              </div>
            </div>
          </form>
          <div className="col-12">
            <Button
              value={'가입하기'}
              onClick={() => {
                this.props.history.push('/signUp');
              }}
              className={'button-signup'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
