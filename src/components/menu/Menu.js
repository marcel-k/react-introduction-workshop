import React from 'react';
import List from '../list/List';
import Search from '../search/Search';
import ListItem from '../list/ListItem';
import { classNames } from '../../utils/utils';
import './Menu.css';

class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchText: '' };
  }

  filterMenuItems() {
    const filteredItems =
      this.props.menuItems.filter((item) => {
        const itemText = item.title.toLowerCase();
        const searchText = this.state.searchText.toLowerCase();

        if (itemText.indexOf(searchText) !== -1) {
          return true;
        }

        return false;
      });

    return filteredItems;
  }

  handleInputChange(text) {
    this.setState({
      searchText: text
    });
  }

  render() {
    const { selectedItemId, onMenuItemClick } = this.props;
    const filteredItems = this.filterMenuItems();

    return (
      <div className={'menu'}>
        <Search 
        searchText={this.state.searchText}
        onInputChange={(value) => this.handleInputChange(value)} />
        <List>
          {filteredItems.map((item) => (
            <ListItem
              key={item.id}
              text={item.title}
              subText={item.date}
              onClick={() => onMenuItemClick(item.id)}
              cssClasses={classNames({
                'current': item.current,
                'registered': item.registered,
                'selected': item.id === selectedItemId
              })}
            />)
          )}
        </List>
      </div>
    );
  }
}

export default Menu;