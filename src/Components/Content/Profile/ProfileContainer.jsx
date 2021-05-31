import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {setUserProfile} from '../../../Redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);