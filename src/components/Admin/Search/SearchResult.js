import React from 'react';

const SearchResult = ({ data }) => (
  <div className="col-12 p-2 searchResult">
    {data.size === 0 ? (
      <div>데이터 없음</div>
    ) : (
      data.map((item, idx) => {
        return (
          <div key={idx} className="searchItem">
            {item.get('phoneNumber')}
          </div>
        );
      })
    )}
  </div>
);

export default SearchResult;
