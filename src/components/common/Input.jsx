import React from 'react';
import './Input.css';

const Input = ({
  type,
  onChange,
  placeholder,
  onBlur,
  className,
  value,
  ref,
  onKeyDown,
  min,
  max
}) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
    type={type}
    className={`commonInput ${className}`}
    value={value}
    ref={ref}
    min={min}
    max={max}
  />
);

export default Input;
