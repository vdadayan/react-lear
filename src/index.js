import './index.css';
import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderTree(store.getState())

store.subscribe(rerenderTree);