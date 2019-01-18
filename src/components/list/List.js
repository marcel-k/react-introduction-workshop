import React from 'react';
import ListItem from './ListItem';
import './List.css';

function List(props) {
  const { items } = props;

  return (
    <ul className={'list'}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          subText={item.subText}
        />)
      )}
    </ul>
  );
}

export default List;