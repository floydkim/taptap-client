import React from 'react';

const SearchResult = ({ data, clickAddCustomer, clickCustomer }) => (
  <div className="col-12 p-2 searchResult">
    {data.size === 0 ? (
      <div>
        <div>검색 결과가 없습니다</div>
      </div>
    ) : (
      data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="searchItem"
            onClick={() =>
              clickCustomer(item.get('id'), item.get('phoneNumber'))
            }
          >
            {item.get('phoneNumber')}
          </div>
        );
      })
    )}
    <div onClick={clickAddCustomer} id="div-addCustomer">
      손님 등록
    </div>
  </div>
);

export default SearchResult;
