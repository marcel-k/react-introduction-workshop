import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import './Menu.css';

function Menu() {
  return (
    <div className={'menu'}>
      <Search />
      <List />
    </div>
  );
}

export default Menu;