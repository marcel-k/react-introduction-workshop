import React from 'react';
import './Button.css';

function Button(props) {
  const { text = '', onClick } = props;
  return (
    <button className={'button button-register'} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;