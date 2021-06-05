import React from 'react';
import Profile from './Profile';
import {getProfile} from '../../../Redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        if (!userId) userId = 2;
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/Login"} />
        return (
            <main>
                <Profile {...this.props} profile={this.props.profile} />
            </main>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);