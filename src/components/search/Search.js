import React from 'react';
import './Search.css';

function Search(props) {
  const { searchText, onInputChange } = props;

  return (
    <div className={'search'}>
      <input
        placeholder={'Search for meetups..'}
        defaultValue={searchText}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default Search;