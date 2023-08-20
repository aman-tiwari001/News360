import React, { useState } from 'react';

const SearchResults = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className='container my-3' style={{width : "600px", margin : "auto"}}>
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        placeholder="Search keyword"
        style={{width : "500px", height : "40px", margin : "auto"}}
      />
      <button className="mx-1" style={{height : "40px"}} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchResults;
