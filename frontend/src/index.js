import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import MyProvider from './context/index';
import 'bulma/css/bulma.css/'

ReactDOM.render(
  <MyProvider>
    <Router></Router>
  </MyProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
