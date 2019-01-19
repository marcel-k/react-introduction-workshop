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
            <span className={'text'}>Fresh up your CSS Skills</span>
            <span className={'subtext'}>30 november 2018</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>HTML semantics and accesibility</span>
            <span className={'subtext'}>2 november 2018</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>JavaScript and TypeScript Fundamentals</span>
            <span className={'subtext'}>19 october 2018</span>
          </button>
        </li>
        <li className={'list-item'}>
          <button className={'wrapper'}>
            <span className={'text'}>Human Centered Design</span>
            <span className={'subtext'}>21 september 2018</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;