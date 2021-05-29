import React from 'react';
import { connect } from 'react-redux';
import { followAC, serUsersAC, unfollowAC } from '../../Redux/reducers/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(serUsersAC(users));
        }
    }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
