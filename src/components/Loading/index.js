import React from 'react';
import './style.css';

function Loading(props) {
  return (
    <div className={'loading-container'}>
      <div className="loader" />
      <p>{props.label}</p>
    </div>
  );
}

export default Loading;