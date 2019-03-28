//Login.js

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  onClick = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }

  render() {
    const { isLogin } = this.state;
    const { onClick } = this
    return (
      <div onClick={onClick}>
        {
          isLogin ? <Redirect to="/admin" /> : "LoginTest"
        }
      </div>
    )
  }
}

