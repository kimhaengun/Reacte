import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './store';
import { Provider } from 'react-redux';

const store = createStore(reducer);
//store를 App 모든 곳에서 사용하기 위해서 Provider로 감싸주기 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

