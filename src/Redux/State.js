import { rerenderTree } from "../render";

let state = {
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
    }
}

window.state = state;

export let addPost= () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
}

export default state;
