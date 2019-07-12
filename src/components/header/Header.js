import React from 'react';
import './Header.css';
import logo from './cw-logo-gradient.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={'header'}>
      <h1 className={'title'}>Clockwork Fresh Fridays</h1>
      <img src={logo} className={'logo'} alt={'Clockwork'} />
      <nav>
        <ul>
          <li>
            <Link to={'/meetups'}>meetups</Link>
          </li>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;