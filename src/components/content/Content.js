import React from 'react';
import SpinnerButton from '../spinner-button/SpinnerButton';
import './Content.css';

function Content(props) {
  const {
    id,
    title,
    registered,
    paragraphs = [],
    onRegisterClick,
    showRegisterSpinner
  } = props;

  const buttonText = registered ? 'Unregister' : 'Register';

  return (
    <main className={'content'}>
      <h1 className="title">{title}</h1>
      {
        paragraphs.map((p, index) => <p key={`${title}-${index}`} className={'description'}>{p}</p>)
      }

      <div className={'content-footer'}>
        <SpinnerButton
          text={buttonText}
          showSpinner={showRegisterSpinner}
          onClick={() => onRegisterClick(id, registered)}
        />
      </div>
    </main>
      );
    }
    
export default Content;