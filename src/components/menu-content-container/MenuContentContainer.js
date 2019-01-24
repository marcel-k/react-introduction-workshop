import React from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';
import Spinner from '../spinner/Spinner';

const apiUrl = 'http://localhost:5005/api';

class MenuContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemId: 0,
      items: [],
      paragraphs: [],
      isLoadingMenu: true,
      isLoadingContent: true,
      isUpdatingMeetup: false
    };
  }

  handleMenuItemClick(itemId) {
    this.setState({
      selectedItemId: itemId
    });

    this.updateContent(itemId);
  }

  async updateContent(itemId) {
    this.setState({
      isLoadingContent: true
    });

    const response = await fetch(apiUrl + '/content/' + itemId);
    const content = await response.json();

    this.setState({
      paragraphs: content.paragraphs,
      isLoadingContent: false
    });
  }

  async updateMeetup(meetup) {
    this.setState({
      isUpdatingMeetup: true
    });

    const response = await fetch(apiUrl + '/meetups/' + meetup.id, {
      method: 'PUT',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const updatedMeetup = await response.json();

    const { items } = this.state;
    const index = items.findIndex(({ id }) => id === meetup.id);
    const newItems = [...items];
    newItems[index] = updatedMeetup;

    this.setState({
      items: newItems,
      isUpdatingMeetup: false
    });
  }

  /**
   * This method should save to the back-end
   * and asynchronously wait for 200 OK before updating item.
   * Meanwhile, selectedItem could already have been changed.
   */
  handleRegisterClick(itemId, isRegistered) {
    const { items } = this.state;
    const item = items.find(({ id }) => id === itemId);
    const newItem = { ...item, registered: !isRegistered };

    this.updateMeetup(newItem);
  }

  async componentDidMount() {
    this.setState({
      isLoadingMenu: true
    });

    const response = await fetch(apiUrl + '/meetups');
    const menuItems = await response.json();

    const selectedItemId = menuItems[0].id;
    this.setState({
      selectedItemId: selectedItemId,
      items: menuItems,
      isLoadingMenu: false
    });

    this.updateContent(selectedItemId);
  }

  render() {
    let selectedItem = this.state.items.find((item) => item.id === this.state.selectedItemId);
    selectedItem = selectedItem || {};

    return (
      <>
        {this.state.isLoadingMenu && <Spinner color={'#61dafb'} cssClasses={'menu'} />}
        {!this.state.isLoadingMenu &&
          <Menu
            menuItems={this.state.items}
            selectedItemId={this.state.selectedItemId}
            onMenuItemClick={(id) => this.handleMenuItemClick(id)}
          />
        }
        {this.state.isLoadingContent &&
          <Spinner
            size={100}
            color={'#ff4700'}
            cssClasses={'content'} />
        }
        {!this.state.isLoadingContent &&
          this.state.selectedItemId !== 0 &&
          <Content
            id={selectedItem.id}
            title={selectedItem.title}
            paragraphs={this.state.paragraphs}
            registered={selectedItem.registered}
            showRegisterSpinner={this.state.isUpdatingMeetup}
            onRegisterClick={(id, isRegistered) => this.handleRegisterClick(id, isRegistered)}
          />
        }
      </>
    );
  }
}

export default MenuContentContainer;