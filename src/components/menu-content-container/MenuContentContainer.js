import React from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';

const apiUrl = 'http://localhost:5005/api';

class MenuContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemId: 0,
      items: [],
      paragraphs: []
    };
  }

  handleMenuItemClick(itemId) {
    this.setState({
      selectedItemId: itemId
    });

    this.updateContent(itemId);
  }

  async updateContent(itemId) {
    const response = await fetch(apiUrl + '/content/' + itemId);
    const content = await response.json();

    this.setState({
      paragraphs: content.paragraphs
    });
  }

  async updateMeetup(meetup) {
    const response = await fetch(apiUrl + '/meetups/' + meetup.id, {
      method: 'PUT',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const updatedMeetup = await response.json();
  }

  /**
   * This method should save to the back-end
   * and asynchronously wait for 200 OK before updating item.
   * Meanwhile, selectedItem could already have been changed.
   */
  handleRegisterClick(itemId, isRegistered) {
    const { items } = this.state;
    const index = items.findIndex(({ id }) => id === itemId);
    const item = items[index];
    const newItem = { ...item, registered: !isRegistered };
    const newItems = [...items];
    newItems[index] = newItem;
    this.setState({
      items: newItems
    });
  }

  async componentDidMount() {
    const response = await fetch(apiUrl + '/meetups');
    const menuItems = await response.json();

    const selectedItemId = menuItems[0].id;
    this.setState({
      selectedItemId: selectedItemId,
      items: menuItems
    });

    this.updateContent(selectedItemId);
  }

  render() {
    let selectedItem = this.state.items.find((item) => item.id === this.state.selectedItemId);
    selectedItem = selectedItem || {};

    return (
      <>
        <Menu
          menuItems={this.state.items}
          selectedItemId={this.state.selectedItemId}
          onMenuItemClick={(id) => this.handleMenuItemClick(id)}
        />
        <Content
          id={selectedItem.id}
          title={selectedItem.title}
          paragraphs={this.state.paragraphs}
          registered={selectedItem.registered}
          onRegisterClick={(id, isRegistered) => this.handleRegisterClick(id, isRegistered)}
        />
      </>
    );
  }
}

export default MenuContentContainer;