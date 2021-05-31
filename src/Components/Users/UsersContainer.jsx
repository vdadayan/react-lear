import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { follow, serUsers, unfollow, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../Redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toogleIsFetching(true);
            this.props.serUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            })

    }
    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(false);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.serUsers(response.data.items);
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
    }
}

const UsersContainer =  connect(mapStateToProps, {follow, unfollow, serUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching,})(UsersAPIComponent);

export default UsersContainer;
