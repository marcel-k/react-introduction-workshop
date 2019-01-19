import React from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';

/** 
 * Data from the back-end
 */
const menuItems = [
  {
    id: 1,
    title: 'React Deep Dive I',
    date: '22 feb 2019'
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

const paragraphs = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
];

const apiUrl = 'http://localhost:5005/api';

class MenuContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemId: 1,
      items: menuItems // should do this in componentDidMount
    };
  }

  handleMenuItemClick(itemId) {
    this.setState({
      selectedItemId: itemId
    });
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

  render() {
    const selectedItem = this.state.items.find((item) => item.id === this.state.selectedItemId);

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