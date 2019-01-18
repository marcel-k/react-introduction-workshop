import React from 'react';
import Menu from '../menu/Menu';
import Content from '../content/Content';

/**
 * This is data coming from the back-end.
 */
const menuItems = [
  {
    id: 1,
    text: 'React Deep Dive I',
    subText: '22 feb 2019',
    selected: true // is not something that the back-end should know..
  },
  {
    id: 2,
    text: 'Angular Deep Dive I',
    subText: '8 feb 2019'
  },
  {
    id: 3,
    text: 'React Introduction',
    subText: '25 jan 2019',
    current: true,
    registered: true
  },
  {
    id: 4,
    text: 'Angular Introduction',
    subText: '11 jan 2019',
    registered: true
  },
  {
    id: 5,
    text: 'Fresh up your CSS Skills',
    subText: '30 november 2018'
  },
  {
    id: 6,
    text: 'HTML semantics and accesibility',
    subText: '2 november 2018'
  },
  {
    id: 7,
    text: 'JavaScript and TypeScript Fundamentals',
    subText: '19 october 2018'
  },
  {
    id: 8,
    text: 'Human Centered Design',
    subText: '21 september 2018'
  }
];

const title = 'React Introduction';

const paragraphs = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
];

function MenuContentContainer() {

  return (
    <>
    <Menu menuItems={menuItems} />
    <Content title={title} paragraphs={paragraphs} />
    </>
  );
}

export default MenuContentContainer;