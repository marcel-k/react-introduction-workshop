import React from 'react';
import ListItem from './ListItem';
import './List.css';

function List(props) {
  const { items } = props;

  return (
    <ul className={'list'}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item.text}
          subText={item.subText}
        />)
      )}
    </ul>
  );
}

export default List;