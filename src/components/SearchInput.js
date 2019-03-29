import React from 'react';

const SearchInput = ({ onChange }) => (
  <input placeholder="휴대폰 번호로 검색" onChange={onChange} type="text" />
);

export default SearchInput;
