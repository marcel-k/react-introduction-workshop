import React from 'react';
import './ListItem.css';

function ListItem(props) {
  const { text, subText, cssClasses = '' } = props;

  return (
      <li className={`list-item ${cssClasses}`}>
        <button className={'wrapper'}>
          <span className={'text'}>{text}</span>
          <span className={'subtext'}>{subText}</span>
        </button>
      </li>
  );
}

export default ListItem;