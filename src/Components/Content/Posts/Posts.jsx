import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post-item/Post-item';

const Posts = ({posts, addPost}) => {
    const onSubmit = (value) => {
        addPost(value.postValue)
    }
    return(
        <>  <div>
                My Posts
            </div> 
            <div>
              <PostReduxForm onSubmit={onSubmit}/>
                <div className="posts">
                    {posts.map((item) => {
                        return(
                            <Post message={item.message} likesCount={item.likesCount} key={item.id} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}


const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="postValue" placeholder="Введите название поста" component="textarea"/>
            <br/>
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'posts'})(PostForm)

export default Posts;