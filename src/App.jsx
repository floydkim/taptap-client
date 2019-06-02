import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Admin, SignRouter } from './components';
import SignIn from './components/SignRouter/SignIn';
import SignUp from './components/SignRouter/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/taptap-client">
        <Route exact path="/" component={SignRouter} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/admin" component={Admin} />
      </BrowserRouter>
    );
  }
}

export default App;
