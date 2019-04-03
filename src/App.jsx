import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Admin } from './components';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
