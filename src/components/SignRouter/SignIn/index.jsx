import React, { Component } from 'react';
import Button from '../../common/Button';
import fetchPostData from '../../../utils/fetchPostData';

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
      this.signInResult.current.innerText = '로그인 실패';
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <h4 ref={this.signInResult}>로그인 결과</h4>
          </div>
          <div className="col-12">
            <input placeholder={'email'} type={'text'} ref={this.email} />
          </div>
          <div className="col-12">
            <input
              placeholder={'password'}
              type={'password'}
              ref={this.password}
            />
          </div>
          <div className="col-12">
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
