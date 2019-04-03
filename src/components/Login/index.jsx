import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render() {
    return (
      <div>
        <Redirect to="/admin">Login Test</Redirect>
      </div>
    );
  }
}
