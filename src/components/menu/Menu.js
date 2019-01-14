import React from 'react';
import List from '../list/List';
import './Menu.css';

const menuItems = [
  {
    text: 'React Deep Dive I',
    subText: '22 feb 2019'
  },
  {
    text: 'Angular Deep Dive I',
    subText: '8 feb 2019'
  },
  {
    text: 'React Introduction',
    subText: '25 jan 2019'
  },
  {
    text: 'Angular Introduction',
    subText: '11 jan 2019'
  },
  {
    text: 'CSS Grid & Flexbox',
    subText: '11 jan 2019'
  }
];

function Menu() {
  return (
    <div className={'menu'}>
      <List items={menuItems} />
    </div>
  );
}

export default Menu;