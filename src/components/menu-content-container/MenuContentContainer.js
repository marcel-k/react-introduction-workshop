import React from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';

const paragraphs = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
];

const apiUrl = 'http://localhost:5005/api';

class MenuContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemId: 0,
      items: []
    };
  }

  handleMenuItemClick(itemId) {
    this.setState({
      selectedItemId: itemId
    });

    // const response = await fetch(apiUrl + '/content/' + itemId);
    // const content = await response.json();
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

    this.setState({
      selectedItemId: menuItems[0].id,
      items: menuItems
    });
  }

  render() {
    let selectedItem = this.state.items.find((item) => item.id === this.state.selectedItemId);
    selectedItem = selectedItem || { };

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
          paragraphs={paragraphs}
          registered={selectedItem.registered}
          onRegisterClick={(id, isRegistered) => this.handleRegisterClick(id, isRegistered)}
        />
      </>
    );
  }
}

export default MenuContentContainer;