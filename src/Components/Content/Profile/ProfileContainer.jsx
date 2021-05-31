import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {setUserProfile} from '../../../Redux/reducers/profileReducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <main>
                <Profile {...this.props} profile={this.props.profile} />
            </main>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);