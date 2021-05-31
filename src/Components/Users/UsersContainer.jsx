import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, serUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toogleIsFetchingAC } from '../../Redux/reducers/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(true);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            })

    }
    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(false);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setIsFetching(true);
        })
    }

    render() {
        console.log(this.props);
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
        ,setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingAC(isFetching))
        },
    }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
