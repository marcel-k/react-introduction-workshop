import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    text: 'React Deep Dive I',
    subText: '22 feb 2019'
  },
  {
    id: 2,
    text: 'Angular Deep Dive I',
    subText: '8 feb 2019'
  },
  {
    id: 3,
    text: 'React Introduction',
    subText: '25 jan 2019'
  },
  {
    id: 4,
    text: 'Angular Introduction',
    subText: '11 jan 2019'
  },
  {
    id: 5,
    text: 'CSS Grid & Flexbox',
    subText: '11 jan 2019'
  }
];

function Menu() {
  return (
    <div className={'menu'}>
      <Search />
      <List items={menuItems} />
    </div>
  );
}

export default Menu;