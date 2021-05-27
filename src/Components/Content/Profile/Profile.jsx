import React from "react";
import PostsContainer from "../Posts/Posts-container";

const Profile = (props) => {
    return(
        <div>
            <main>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png" alt="ikea"/>
                <PostsContainer />
            </main>
        </div>
    );
}

export default Profile;