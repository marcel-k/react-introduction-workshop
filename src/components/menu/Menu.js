import React from 'react';
import List from '../list/List';
import './Menu.css';

function Menu() {
  return (
    <div className={'menu'}>
      <div className={'search'}>
        <input placeholder={'Zoeken naar meetups..'} />
      </div>
      <List />
    </div>
  );
}

export default Menu;