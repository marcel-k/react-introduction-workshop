import React from 'react';
import List from '../list/List';
import ListItem from '../list/ListItem';
import { classNames } from '../../utils/utils';
import './Menu.css';

/**
 * This is data coming from the back-end.
 */
const menuItems = [
  {
    id: 1,
    text: 'React Deep Dive I',
    subText: '22 feb 2019',
    selected: true // is not something that the back-end should know..
  },
  {
    id: 2,
    text: 'Angular Deep Dive I',
    subText: '8 feb 2019'
  },
  {
    id: 3,
    text: 'React Introduction',
    subText: '25 jan 2019',
    current: true,
    registered: true
  },
  {
    id: 4,
    text: 'Angular Introduction',
    subText: '11 jan 2019',
    registered: true
  },
  {
    id: 5,
    text: 'CSS Grid & Flexbox',
    subText: '11 jan 2019'
  }
];

function Menu() {
  /**
   * Could do something like this, 
   * but then you would have to edit the list / listitem component
   * every time you have a different use case for it.
  const cssClasses = {
    selected: 'list-item-selected',
    registered: 'list-item-registered'
  };
  const selectedItemId = 1;
  <List
    items={menuItems}
    cssClasses={cssClasses}
    selectedItemId={selectedItemId}
  />

  In stead, use composition and iterate over the menuItems here
  */

  return (
    <div className={'menu'}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            subText={item.subText}
            // cssClasses={`${item.current ? 'current' : ''} ${item.registered ? 'registered' : ''}`}
            cssClasses={classNames({
              'current': item.current,
              'registered': item.registered,
              'selected': item.selected
            })}
          />)
        )}
      </List>
    </div>
  );
}

export default Menu;