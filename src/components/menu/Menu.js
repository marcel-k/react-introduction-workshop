import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import ListItem from '../list/ListItem';
import { classNames } from '../../utils/utils';
import './Menu.css';

/** 
 * Data from the back-end
 */
const menuItems = [
  {
    id: 1,
    title: 'React Deep Dive I',
    date: '22 feb 2019',
    selected: true // is not something that the back-end should know..
  },
  {
    id: 2,
    title: 'Angular Deep Dive I',
    date: '8 feb 2019'
  },
  {
    id: 3,
    title: 'React Introduction',
    date: '25 jan 2019',
    current: true,
    registered: true
  },
  {
    id: 4,
    title: 'Angular Introduction',
    date: '11 jan 2019',
    registered: true
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
              text={item.title}
              subText={item.date}
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