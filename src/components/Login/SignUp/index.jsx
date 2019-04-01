import React, { Component } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>꾹꾹이</h1>
          </div>
          <div className="col-12">
            <Input placeholder={'email ID'} type={'text'} />
          </div>
          <div className="col-12">
            <Input placeholder={'***'} type={'password'} />
          </div>
          <div className="col-12">
            <Input placeholder={'***'} type={'password'} />
          </div>
          <div className="col-12">
            <Input
              placeholder={'운영중인 매장 이름을 입력하세요'}
              type={'text'}
            />
          </div>
          <div className="col-12">
            <Button value={'가입하기'} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
