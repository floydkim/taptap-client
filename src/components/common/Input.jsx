import React from 'react';

const Input = ({ type, onChange, placeholder, onBlur, className }) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
    className={className}
  />
);

export default Input;
