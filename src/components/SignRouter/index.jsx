import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fetchGetData from '../../utils/fetchGetData';
import './index.css';

export default class SignRouter extends Component {
  constructor(props) {
    super(props);

    this.id = undefined;
  }

  hasSignedIn = () => {
    let result = {
      isSuccess: false
    };
    (async () => {
      result = await fetchGetData('/stores/stores/signin-store-with-token');
      this.id = result.id || undefined;
      console.log(result);
    })();

    return result ? result.isSuccess : false;
  };

  getID = () => {
    return this.id;
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
