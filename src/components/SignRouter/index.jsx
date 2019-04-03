import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SignRouter extends Component {
  hasSignedIn = () => {
    // TODO:
    return false;
  };

  getID = () => {
    return 2;
  };

  render() {
    return (
      <div>
        {this.hasSignedIn() ? (
          <Redirect to={{ pathname: '/admin', state: { id: this.getID() } }} />
        ) : (
          <Redirect to="/signIn" />
        )}
      </div>
    );
  }
}
