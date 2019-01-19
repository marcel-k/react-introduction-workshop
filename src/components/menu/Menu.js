import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import './Menu.css';

/** 
 * Data from the back-end
 */
const menuItems = [
  {
    id: 1,
    title: 'React Deep Dive I',
    date: '22 feb 2019'
  },
  {
    id: 2,
    title: 'Angular Deep Dive I',
    date: '8 feb 2019'
  },
  {
    id: 3,
    title: 'React Introduction',
    date: '25 jan 2019'
  },
  {
    id: 4,
    title: 'Angular Introduction',
    date: '11 jan 2019'
  },
  {
    id: 5,
    title: 'Fresh up your CSS Skills',
    date: '30 november 2018'
  },
  {
    id: 6,
    title: 'HTML semantics and accesibility',
    date: '2 november 2018'
  },
  {
    id: 7,
    title: 'JavaScript and TypeScript Fundamentals',
    date: '19 october 2018'
  },
  {
    id: 8,
    title: 'Human Centered Design',
    date: '21 september 2018'
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