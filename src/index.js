import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/index.css';
import './assets/css/skin.css';
import Main from "./containers/Main";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
