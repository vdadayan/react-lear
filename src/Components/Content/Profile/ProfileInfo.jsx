import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusWithHooks from '../Profile/ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <>
            <div>
                <img src={props.profile.photos.large} alt="ava" />
                <ProfileStatusWithHooks {...props}/>
            </div>
        </>
    )
}

export default ProfileInfo;
