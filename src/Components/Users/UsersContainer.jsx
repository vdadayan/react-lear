import React from 'react';
import { connect } from 'react-redux';
import { follow, serUsers, unfollow, setCurrentPage, setTotalUsersCount, toogleIsFetching, toggleFollowingProgress } from '../../Redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { userAPI } from '../Api/Api';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(false);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toogleIsFetching(true);
            this.props.serUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            })

    }
    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(false);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.serUsers(response.items);
            this.props.toogleIsFetching(true);
        })
    }

    render() {
        return <>
            {!this.props.isFetching ? <Preloader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            toggleFollowingProgress = {this.props.toggleFollowingProgress}
            followingInProgress = {this.props.followingInProgress}
            />
        </>
    
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

const UsersContainer =  connect(mapStateToProps, 
    {follow, unfollow, serUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching, toggleFollowingProgress})(UsersAPIComponent);

export default UsersContainer;
