import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.sass';
import './styles/loading-indicator.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);