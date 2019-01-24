import React from 'react';
import Button from '../button/Button';
import Spinner from '../spinner/Spinner';
import './SpinnerButton.css';

function SpinnerButton(props) {
  const { showSpinner = false, ...buttonProps } = props;

  return (
    <div className={'spinner-button'}>
      {showSpinner && <Spinner size={20} />}
      <Button {...buttonProps} />
    </div>
  );
}

export default SpinnerButton;