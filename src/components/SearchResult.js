import React from 'react';

const SearchResult = ({ data }) => (
  <div>
    {data.length === 0 ? (
      <div>데이터 없음</div>
    ) : (
      data.map((item, idx) => {
        return <div key={idx}>{item.phoneNumber}</div>;
      })
    )}
  </div>
);

export default SearchResult;
