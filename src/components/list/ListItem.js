import React from 'react';
import './ListItem.css';

function ListItem(props) {
  const { text, subText } = props;
  return (
    <ul className={'list'}>
      <li className={'list-item'}>
        <button className={'wrapper'}>
          <span className={'text'}>{text}</span>
          <span className={'subtext'}>{subText}</span>
        </button>
      </li>
    </ul>
  );
}

export default ListItem;