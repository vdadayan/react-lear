import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profileReducer';
import Posts from './Posts';

// const PostsContainer = (props) => {

//     return(
//         <StoreContext.Consumer>
//             {
//              (store) => {
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
            
//                 const onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
            
//                 }
//                     return (
//                         <Posts updateNewPostText={onPostChange}
//                         addPost={addPost} 
//                         posts={store.getState().profilePage.posts} 
//                         newPostText={store.getState().profilePage.newPostText}/>

//                     )
//              }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;