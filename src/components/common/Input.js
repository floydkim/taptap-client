import React from 'react';

const Input = ({ onChange, placeholder, onBlur, className }) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    type="text"
    className={className}
  />
);

export default Input;
