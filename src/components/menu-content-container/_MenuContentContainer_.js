import React, { /*useState,*/ useEffect, useReducer } from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';
import Spinner from '../spinner/Spinner';

const apiUrl = 'http://localhost:5005/api';

function menuContentReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FETCHING_MENU_ITEMS': {
      return { ...state, isLoadingMenu: true };
    }
    case 'SET_SELECTED_ITEM': {
      return { ...state, selectedItemId: payload };
    }
    default:
      return state;
  }
}

function MenuContentContainer(_props) {
  // const {  } = props;
  const [state, dispatch] = useReducer(menuContentReducer, {
    // TODO: set initial/default state properties
  });
  // TODO: destructure state here so you can use all state properties directly

  useEffect(() => {
    async function getMenuItems() {
      // TODO: using the reducer: start the menu loading spinner
      // dispatch({ type: 'FETCHING_MENU_ITEMS' });

      const response = await fetch(apiUrl + '/meetups');
      const menuItems = await response.json();

      // TODO: Using the reducer: stop the menu loading spinner, update state with menuItems and update the selectedItemId
      // dispatch(..);

      //Note: this could be done in a useEffect that is watching items
      updateContent(menuItems[0].id);
    }

    getMenuItems();
  }, []);

  const handleMenuItemClick = (itemId) => {
    // TODO: using the reducer: update the selectedMenuId
    // dispatch({ type: 'SET_SELECTED_ITEM', payload: itemId });

    //Note: this could be done in a useEffect that is watching selectedItemId
    updateContent(itemId);
  }

  const updateContent = async (itemId) => {
    // TODO: Using the reducer: start the content loading spinner (isLoadingContent)
    // dispatch(..);

    const response = await fetch(apiUrl + '/content/' + itemId);
    const content = await response.json();

    // TODO: using the reducer: stop the content loading spinner and update the paragraphs with content.paragraphs.
    //dispatch(..);
  }

  const updateMeetup = async (meetup) => {
    // TODO: using the reducer: start the update meetup spinner (isUpdatingMeetup)
    dispatch({ type: 'UPDATING_MEETUP' });

    const response = await fetch(apiUrl + '/meetups/' + meetup.id, {
      method: 'PUT',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const updatedMeetup = await response.json();

    // TODO: using the reducer: stop the update meetup spinner.
    // update the meetup in the items list by finding the index
    // and replacing the item in the list with updatedMeetup.
    // Make sure the new items lists on the state is a NEW array.
    //dispatch(..);
  }

  /**
   * This method should save to the back-end
   * and asynchronously wait for 200 OK before updating item.
   * Meanwhile, selectedItem could already have been changed.
   */
  const handleRegisterClick = (itemId, isRegistered) => {
    const item = items.find(({ id }) => id === itemId);
    const newItem = { ...item, registered: !isRegistered };

    updateMeetup(newItem);
  }

  let selectedItem = items.find((item) => item.id === selectedItemId);
  selectedItem = selectedItem || {};

  return (
    <>
      {isLoadingMenu && <Spinner color={'#61dafb'} cssClasses={'menu'} />}
      {!isLoadingMenu &&
        <Menu
          menuItems={items}
          selectedItemId={selectedItemId}
          onMenuItemClick={(id) => handleMenuItemClick(id)}
        />
      }
      {isLoadingContent &&
        <Spinner
          size={100}
          color={'#ff4700'}
          cssClasses={'content'} />
      }
      {!isLoadingContent &&
        selectedItemId !== 0 &&
        <Content
          id={selectedItem.id}
          title={selectedItem.title}
          paragraphs={paragraphs}
          registered={selectedItem.registered}
          showRegisterSpinner={isUpdatingMeetup}
          onRegisterClick={(id, isRegistered) => handleRegisterClick(id, isRegistered)}
        />
      }
    </>
  );
}

export default MenuContentContainer;