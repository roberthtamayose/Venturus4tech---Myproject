import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

axios.defaults.baseURL = 'http://afternoon-ocean-29603.herokuapp.com';

window.getAxiosConfig = () => {
  return{
    headers:{
      'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem('token'))
    }
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();