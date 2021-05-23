import React from 'react';
import Post from './Post-item/Post-item';

const Posts = ({posts, newPostText, dispatch}) => {

     let newPostElement = React.createRef();

    const add = () => {
        dispatch({type: 'ADD-POST'})
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        // dispatch.updateNewPostText(text);
        dispatch({type: 'UPDATEN-NEW-POST-TEXT', newText: text})
    }
    return(
        <>  <div>
                My Posts
            </div> 
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="10" value={newPostText}/>
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