import React from 'react';
import './Users.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/ava.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div className="users-wrapper">
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => {this.onPageChanged(p)}} 
                        className={this.props.currentPage === p ? "selected-page" : ""}>{p}</span>
                    )
                })}
            </div>
        {
            this.props.users.map((item) => {
                return (
                    <div key={item.id} className="user">
                        <div className="user-nav">
                            <img src={item.photos.small != null ? item.photos.small : userPhoto} alt="avatar" />
                            {item.followed 
                            ? <button onClick={() => {this.props.unfollow(item.id)}}>Follow</button> 
                            : <button onClick={() => {this.props.follow(item.id)}}>Unfollow</button>}
                        </div>
                        <div className="user-info">
                            <div>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </div>
                            <div>
                                <div>{"item.location.country"}</div>
                                <div>{"item.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    }
}

export default Users;