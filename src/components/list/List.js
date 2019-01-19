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
          text={'Fresh up your CSS Skills'}
          subText={'30 november 2018'}
        />
        <ListItem
          text={'HTML semantics and accesibility'}
          subText={'2 november 2018'}
        />
        <ListItem
          text={'JavaScript and TypeScript Fundamentals'}
          subText={'19 october 2018'}
        />
        <ListItem
          text={'Human Centered Design'}
          subText={'21 september 2018'}
        />
    </ul>
  );
}

export default List;