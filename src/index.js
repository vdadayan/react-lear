import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderTree(store.getState())

store.subscribe(()=> {
  let state = store.getState()
  rerenderTree(state)
});