import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Login, Admin } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
