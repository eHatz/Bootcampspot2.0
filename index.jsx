import React from 'react';
import ReactDOM from 'react-dom';
import { Router,  hashHistory } from 'react-router';
import routes from './routes';
import auth from './auth'


ReactDOM.render((
  <Router history={hashHistory}>{routes}</Router>
), document.getElementById('example'))