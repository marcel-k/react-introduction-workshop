import React, { /*useState,*/ useEffect, useReducer } from 'react';
import Menu from '../components/menu/Menu';
import Content from '../components/content/Content';
import Spinner from '../components/spinner/Spinner';

const apiUrl = 'http://localhost:5005/api';

function menuContentReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'FETCHING_MENU_ITEMS': {
      return { ...state, isLoadingMenu: true };
    }
    case 'MENU_ITEMS_FETCHED': {
      return { ...state, isLoadingMenu: false, selectedItemId: payload[0].id, items: payload };
    }
    case 'SET_SELECTED_ITEM': {
      return { ...state, selectedItemId: payload };
    }
    case 'FETCHING_CONTENT': {
      return { ...state, isLoadingContent: true };
    }
    case 'CONTENT_FETCHED': {
      return { ...state, isLoadingContent: false, paragraphs: payload.paragraphs }
    }
    case 'UPDATING_MEETUP': {
      return { ...state, isUpdatingMeetup: true };
    }
    case 'MEETUP_UPDATED': {
      const { items } = state;
      const index = items.findIndex((item) => item.id === payload.id);
      items[index] = payload;

      return { ...state, isUpdatingMeetup: false, items: [...items] };
    }
    default:
      return state;
  }
}

function Meetups(_props) {
  // const {  } = props;
  const [state, dispatch] = useReducer(menuContentReducer, {
    items: [],
    paragraphs: [],
    selectedItemId: 0,
    isLoadingMenu: true,
    isLoadingContent: true,
    isUpdatingMeetup: false
  });
  const {
    items,
    paragraphs,
    selectedItemId,
    isLoadingMenu,
    isLoadingContent,
    isUpdatingMeetup
  } = state;
  // const [selectedItemId, setSelectedItemId] = useState(0);
  // const [items, setItems] = useState([]);
  // const [paragraphs, setParagraphs] = useState([]);
  // const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  // const [isLoadingContent, setIsLoadingContent] = useState(true);
  // const [isUpdatingMeetup, setIsUpdatingMeetup] = useState(false);

  useEffect(() => {
    async function getMenuItems() {
      // setIsLoadingMenu(true);
      dispatch({ type: 'FETCHING_MENU_ITEMS' });

      const response = await fetch(apiUrl + '/meetups');
      const menuItems = await response.json();

      // setSelectedItemId(id);
      // setItems(menuItems);
      // setIsLoadingMenu(false);
      dispatch({ type: 'MENU_ITEMS_FETCHED', payload: menuItems });

      //Note: this could be done in a useEffect that is watching items
      updateContent(menuItems[0].id);
    }

    getMenuItems();
  }, []);

  const handleMenuItemClick = (itemId) => {
    // setSelectedItemId(itemId);
    dispatch({ type: 'SET_SELECTED_ITEM', payload: itemId });

    //Note: this could be done in a useEffect that is watching selectedItemId
    updateContent(itemId);
  }

  const updateContent = async (itemId) => {
    // setIsLoadingContent(true);
    dispatch({ type: 'FETCHING_CONTENT' });

    const response = await fetch(apiUrl + '/content/' + itemId);
    const content = await response.json();

    // setParagraphs(content.paragraphs);
    // setIsLoadingContent(false);
    dispatch({ type: 'CONTENT_FETCHED', payload: content });
  }

  const updateMeetup = async (meetup) => {
    // setIsUpdatingMeetup(true);
    dispatch({ type: 'UPDATING_MEETUP' });

    const response = await fetch(apiUrl + '/meetups/' + meetup.id, {
      method: 'PUT',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const updatedMeetup = await response.json();

    // const index = items.findIndex(({ id }) => id === meetup.id);
    // const newItems = [...items];
    // newItems[index] = updatedMeetup;

    // setItems(newItems);
    // setIsUpdatingMeetup(false);
    dispatch({ type: 'MEETUP_UPDATED', payload: updatedMeetup });
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

export default Meetups;