import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profileReducer';
import StoreContext from '../../../StoreContext';
import Posts from './Posts';

const PostsContainer = (props) => {

    return(
        <StoreContext.Consumer>
            {
             (store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
            
                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
            
                }
                    return (
                        <Posts updateNewPostText={onPostChange}
                        addPost={addPost} 
                        posts={store.getState().profilePage.posts} 
                        newPostText={store.getState().profilePage.newPostText}/>

                    )
             }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;