import React from 'react';
import Post from './Post-item/Post-item';

const Posts = ({posts, newPostText, updateNewPostText, addPost}) => {
    let newPostElement = React.createRef();

    const add = () => {
        addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;

        updateNewPostText(text);
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
                            <Post message={item.message} likesCount={item.likesCount} ket={item.id}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Posts;