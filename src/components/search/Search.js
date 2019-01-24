import React from 'react';
import './Search.css';

function Search(props) {
  const { searchText } = props;

  return (
    <div className={'search'}>
      <input placeholder={'Search for meetups..'} defaultValue={searchText} />
    </div>
  );
}

export default Search;