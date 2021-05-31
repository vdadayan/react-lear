import React from "react";
import PostsContainer from "../Posts/Posts-container";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
    console.log(props);
    return(
        <div>
            <main>
                <ProfileInfo profile={props.profile}/>
                <PostsContainer />
            </main>
        </div>
    );
}

export default Profile;