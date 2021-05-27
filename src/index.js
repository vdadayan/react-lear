import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import StoreContext, { Provider } from './StoreContext';

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

rerenderTree(store.getState())

store.subscribe(()=> {
  let state = store.getState()
  rerenderTree(state)
});