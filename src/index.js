import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';
import Routes from './routes'

import { Provider } from 'react-redux';
import store from './store'

//import App from './components/App.jsx';



ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routes}>
    </Router>
  </Provider>,
  document.getElementById('root')
);
