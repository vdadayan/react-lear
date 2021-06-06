import React from 'react';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

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
                <ProfileStatus {...props}/>
            </div>
        </>
    )
}

export default ProfileInfo;
