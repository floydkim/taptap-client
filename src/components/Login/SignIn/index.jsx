import React, { Component } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <Input placeholder={'email'} type={'text'} ref={this.email} />
          </div>
          <div className="col-12">
            <Input placeholder={'***'} type={'password'} ref={this.password} />
          </div>
          <div className="col-12">
            <Button
              value={'로그인'}
              onClick={() => {
                this.props.history.push('/admin');
              }}
            />
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
