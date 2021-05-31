import React from 'react';
import Preloader from '../../Preloader/Preloader';

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
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
            </div>
        </>
    )
}

export default ProfileInfo;
