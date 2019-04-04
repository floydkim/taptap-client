import React from 'react';
import './Input.css';

const Input = ({
  type,
  onChange,
  onKeyDown,
  placeholder,
  onBlur,
  className,
  value
}) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
    type={type}
    className={`commonInput ${className}`}
    value={value}
  />
);

export default Input;
