import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { context } from './context'

const host = process.env.NODE_ENV === 'development' ? 'http://localhost:8090' : 'http://39.96.31.138'
const globalData = {
  host
}

ReactDOM.render(
  <context.Provider value={globalData} >
    <App />
  </context.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
