import React from 'react';
import Button from '../button/Button';
import './Content.css';

function Content(props) {
  const { 
    title, 
    registered,
    paragraphs = []
   } = props;

  const buttonText = registered ? 'Unregister' : 'Register';

  return (
    <main className={'content'}>
      <h1 className="title">{title}</h1>
      {
        paragraphs.map((p, index) => <p key={`${title}-${index}`} className={'description'}>{p}</p>)
      }
      <Button text={buttonText} />
    </main>
  );
}

export default Content;