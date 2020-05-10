import React from 'react';
import './style.css';

function Loading(props) {
  return (
    <div className={'loading-container'}>
      <div class="loader" />
      <p>{props.label}</p>
    </div>
  );
}

export default Loading;