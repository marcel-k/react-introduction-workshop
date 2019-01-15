import React from 'react';
import './Button.css';

function Button(props) {
  const { text = '' } = props;
  return (
    <button className={'button button-register'}>
      {text}
    </button>
  );
}

export default Button;