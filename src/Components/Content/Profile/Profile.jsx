import React from "react";
import Posts from "../Posts/Posts";

const Profile = ({posts, addPost, newPostText, updateNewPostText}) => {
    return(
        <div>
            <main>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png" alt="ikea"/>
                <Posts updateNewPostText={updateNewPostText} addPost={addPost} posts={posts} newPostText={newPostText}/>
            </main>
        </div>
    );
}

export default Profile;