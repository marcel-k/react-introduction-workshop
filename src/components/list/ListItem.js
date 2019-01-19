import React from 'react';
import './ListItem.css';

function ListItem(props) {
  const {
    text,
    subText,
    cssClasses = '',
    onClick
  } = props;


  return (
    <li className={`list-item ${cssClasses}`}>
      <button className={'wrapper'} onClick={onClick}>
        <span className={'text'}>{text}</span>
        <span className={'subtext'}>{subText}</span>
      </button>
    </li>
  );
}

export default ListItem;