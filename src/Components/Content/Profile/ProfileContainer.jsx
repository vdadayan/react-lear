import React from 'react';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus} from '../../../Redux/reducers/profileReducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        if (!userId) userId = 17418;
        this.props.getProfile(userId)
        
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/Login"} />
        return (
            <main>
                <Profile {...this.props}/>
            </main>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer);