import React from 'react';
import ListItem from './ListItem';
import './List.css';

function List() {
  return (
    <ul className={'list'}>
        <ListItem
          text={'React Deep Dive I'}
          subText={'22 feb 2019'}
        />
        <ListItem
          text={'Angular Deep Dive I'}
          subText={'8 feb 2019'}
        />
        <ListItem
          text={'React Introduction'}
          subText={'25 jan 2019'}
        />
        <ListItem
          text={'Angular Introduction'}
          subText={'11 jan 2019'}
        />
        <ListItem
          text={'CSS Grid & Flexbox'}
          subText={'11 jan 2019'}
        />
    </ul>
  );
}

export default List;