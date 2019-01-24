import React from 'react';
import './Button.css';

function Button(props) {
  const { text = '', onClick, cssClasses = '' } = props;
  return (
    <button className={`button ${cssClasses}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;