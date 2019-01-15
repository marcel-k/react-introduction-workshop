import React from 'react';
import Button from '../button/Button';
import './Content.css';

function Content(props) {
  const { title, paragraphs = [] } = props;

  return (
    <main className={'content'}>
      <h1 className="title">{title}</h1>
      {
        paragraphs.map((p, index) => <p key={`${title}-${index}`} className={'description'}>{p}</p>)
      }
      <Button text={'Unregister'} />
    </main>
  );
}

export default Content;