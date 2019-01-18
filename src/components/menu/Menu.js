import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import ListItem from '../list/ListItem';
import { classNames } from '../../utils/utils';
import './Menu.css';

class Menu extends React.Component {

  constructor() {
    super();

    this.state = { searchText: '' };
  }

  filterMenuItems() {
    const filteredItems =
      this.props.menuItems.filter((item) => {
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