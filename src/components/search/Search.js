import React, { useRef, useEffect } from 'react';
import './Search.css';

function Search(props) {
  const { searchText, onInputChange } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    if (!!inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={'search'}>
      <input
        ref={inputRef}
        defaultValue={searchText}
        placeholder={'Search for meetups..'}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default Search;