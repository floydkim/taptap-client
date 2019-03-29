import React from 'react';

const Input = ({ onChange, placeholder, onBlur }) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    type="text"
  />
);

export default Input;
