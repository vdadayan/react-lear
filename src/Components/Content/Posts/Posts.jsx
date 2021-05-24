import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profileReducer';
import Post from './Post-item/Post-item';



const Posts = ({posts, newPostText, dispatch}) => {

     let newPostElement = React.createRef();

    const add = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text))
    }
    return(
        <>  <div>
                My Posts
            </div> 
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                <br/>
                <button onClick={add}>Add post</button>
                <div className="posts">
                    {posts.map((item) => {
                        return(
                            <Post message={item.message} likesCount={item.likesCount}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Posts;