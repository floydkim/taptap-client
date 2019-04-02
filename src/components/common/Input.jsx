import React from 'react';

const Input = ({ type, onChange, placeholder, onBlur, className, value }) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
    className={className}
    value={value}
  />
);

export default Input;
