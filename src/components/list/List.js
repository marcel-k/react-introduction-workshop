import React from 'react';
import './List.css';

function List(props) {
  const { children } = props;

  return (
    <ul className={'list'}>
      {children}
    </ul>
  );
}

export default List;