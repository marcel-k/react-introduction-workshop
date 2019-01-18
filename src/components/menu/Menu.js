import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
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

class Menu extends React.Component {

  constructor() {
    super();

    this.state = { searchText: '' };
  }

  filterMenuItems() {
    const filteredItems =
      menuItems.filter((item) => {
        const itemText = item.text.toLowerCase();
        const searchText = this.state.searchText.toLowerCase();

        if (itemText.indexOf(searchText) !== -1) {
          return true;
        }

        return false;
      });

    return filteredItems;
  }

  render() {
    const filteredItems = this.filterMenuItems();

    return (
      <div className={'menu'}>
        <Search searchText={this.state.searchText} />
        <List>
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              text={item.text}
              subText={item.subText}
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
}

export default Menu;