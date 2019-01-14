import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className={'menu'}>
      <ul className={'list'}>
        <li className={'list-item'}>
          <button className={'link'}>
            <span className={'title'}>React Deep Dive I</span>
            <span className={'date'}>22 feb 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'link'}>
            <span className={'title'}>Angular Deep Dive I</span>
            <span className={'date'}>8 feb 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'link'}>
            <span className={'title'}>React Introduction</span>
            <span className={'date'}>25 jan 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'link'}>
            <span className={'title'}>Angular Introduction</span>
            <span className={'date'}>11 jan 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'link'}>
            <span className={'title'}>CSS Grid & Flexbox</span>
            <span className={'date'}>11 jan 2019</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;