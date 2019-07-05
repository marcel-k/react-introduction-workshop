import React, { useState } from 'react';
import List from '../list/List';
import Search from '../search/Search';
import ListItem from '../list/ListItem';
import { classNames } from '../../utils/utils';
import './Menu.css';


function filterMenuItems(menuItems, searchText) {
  const filteredItems =
    menuItems.filter((item) => {
      const itemText = item.title.toLowerCase();
      const lowerCase = searchText.toLowerCase();

      if (itemText.indexOf(lowerCase) !== -1) {
        return true;
      }

      return false;
    });

  return filteredItems;
}

function Menu (props) {
  const {
    menuItems,
    selectedItemId,
    onMenuItemClick
  } = props;
  const [searchText, setSearchText] = useState('');

  const filteredItems = filterMenuItems(menuItems, searchText);

  return (
    <div className={'menu'}>
      <Search
        searchText={searchText}
        onInputChange={setSearchText} />
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

export default Menu;