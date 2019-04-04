import React from 'react';

const Input = ({
  type,
  onChange,
  placeholder,
  onBlur,
  className,
  value,
  ref
}) => (
  <input
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
    className={className}
    value={value}
    ref={ref}
  />
);

export default Input;
