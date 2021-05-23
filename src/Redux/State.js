const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
  _state : {
    profilePage: {
        posts: [
          {id: 1, message: 'How are you?', likesCount: 12},
          {id: 2, message: 'its my first post', likesCount: 11},
        ],
        newPostText: 'it-kamasutra.com'

    },messagesPage: {
        message: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How is your it-kamasutra?'},
          {id: 3, message: 'Yo'},
          {id: 4, message: 'Yo'},
          {id: 5, message: 'Yo'},
        ],
        dialogs: [
          {id: 1, name: 'Dymich'},
          {id: 2, name: 'Andrey'},
          {id: 3, name: 'Sveta'},
          {id: 4, name: 'Sasha'},
          {id: 5, name: 'Viktor'},
          {id: 6, name: 'Valera'},
        ],
        newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log(this._state.profilePage.newPostText);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.message.push( {id: 6, message: body})
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
  return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMEssageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default store;
window.store = store;
