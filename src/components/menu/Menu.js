import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className={'menu'}>
    <div className={'search'}>
      <input placeholder={'Zoeken naar meetups..'} />
    </div>
      <ul className={'list'}>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>React Deep Dive I</span>
            <span className={'subtext'}>22 feb 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>Angular Deep Dive I</span>
            <span className={'subtext'}>8 feb 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>React Introduction</span>
            <span className={'subtext'}>25 jan 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>Angular Introduction</span>
            <span className={'subtext'}>11 jan 2019</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>CSS Grid & Flexbox</span>
            <span className={'subtext'}>11 jan 2019</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;