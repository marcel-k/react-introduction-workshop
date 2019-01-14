import React from 'react';
import './Header.css';
import logo from './cw-logo-gradient.svg';

function Header() {
  return (
    <header className={'header'}>
      <h1 className={'title'}>Clockwork Fresh Fridays</h1>
      <img src={logo} className={'logo'} alt={'Clockwork'} />
    </header>
  );
}

export default Header;