import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className={'search'}>
      <input placeholder={'Search for meetups..'} />
    </div>
  );
}

export default Search;