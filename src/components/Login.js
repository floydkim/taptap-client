const React = require('react');

const { Component } = React;

const ReactRouterDom = require('react-router-dom');

const { Redirect } = ReactRouterDom;

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
      <div onClick={onClick}>
        {isLogin ? <Redirect to="/admin" /> : 'LoginTest'}
      </div>
    );
  }
}
