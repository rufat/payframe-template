import React from 'react';
import './style.css';

function Result(props) {
  return (
    <div className={'r-area'}>
      <div className={'r-contents'}>
        <img alt={'Success'} src={'./assets/success.svg'} />
        <p>İşleminiz gerçekleştirdi.</p>
        <button onClick={() => props.stepHandler(false, 1)} className={'start-process-btn'}>İşlemi bitir</button>
      </div>
    </div>
  );
}

export default Result;