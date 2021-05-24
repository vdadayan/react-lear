import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profileReducer';
import Posts from './Posts';

const PostsContainer = ({posts, newPostText, dispatch}) => {
    
    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text))

    }

    return(
        <Posts updateNewPostText={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText}/>
    )
}

export default PostsContainer;