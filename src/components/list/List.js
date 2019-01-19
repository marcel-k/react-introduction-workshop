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
          text={item.title}
          subText={item.date}
        />)
      )}
    </ul>
  );
}

export default List;