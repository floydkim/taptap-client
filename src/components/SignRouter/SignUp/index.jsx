import React, { Component } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.idInput = React.createRef();
    this.passwordInput = React.createRef();
    this.passwordCheckInput = React.createRef();
    this.storeName = React.createRef();
  }

  render() {
    const { idInput, passwordInput, passwordCheckInput, storeName } = this;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <Input placeholder={'email ID'} type={'text'} ref={idInput} />
          </div>
          <div className="col-12">
            <Input
              placeholder={'password'}
              type={'password'}
              ref={passwordInput}
            />
          </div>
          <div className="col-12">
            <Input
              placeholder={'password'}
              type={'password'}
              ref={passwordCheckInput}
            />
          </div>
          <div className="col-12">
            <Input
              placeholder={'운영중인 매장 이름을 입력하세요'}
              type={'text'}
              ref={storeName}
            />
          </div>
          <div className="col-12">
            <Button
              value={'가입하기'}
              onClick={() => {
                this.props.history.push('/');
              }}
            />
            <Button
              value={'돌아가기'}
              onClick={() => {
                this.props.history.push('/');
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
