import {createStore, combineReducers} from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogReducer';
import sidebarReducer from './reducers/sidebarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;