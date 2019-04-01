import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  onClick = () => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: !isLogin
    });
  };

  render() {
    const { isLogin } = this.state;
    const { onClick } = this;
    return (
      <div>
        <SignIn />
        <SignUp />
        <div onClick={onClick}>
          {isLogin ? <Redirect to="/admin" /> : 'LoginTest'}
        </div>
      </div>
    );
  }
}
