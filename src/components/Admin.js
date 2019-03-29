import React, { Component } from 'react';
import Search from './Search';
import Info from './Info';

export default class Admin extends Component {
  render() {
    return (
      <div className="container outerHeight">
        <div className="row outerHeight">
          <Search />
          <Info />
        </div>
      </div>
    );
  }
}
