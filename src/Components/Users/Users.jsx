import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/ava.png";
import './Users.scss';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 240);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className="users-wrapper">
            <div>
                {pages.map((p) => {
                    return (
                        <span onClick={() => { props.onPageChanged(p)}}
                            className={props.currentPage === p ? "selected-page" : ""}>
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map((item) => {
                return (
                    <div key={item.id} className="user">
                        <div className="user-nav">
                            <NavLink to={'/profile/' + item.id}>
                                <img
                                    src={item.photos.small != null ? item.photos.small : userPhoto}
                                    alt="avatar"
                                />
                            </NavLink>
                            {item.followed ? (
                                <button disabled={props.followingInProgress.some(id => id === item.id)}
                                        onClick={() => {props.unfollow(item.id)}}>
                                    Follow
                                </button>
                            ) : (
                                <button disabled={props.followingInProgress.some(id => id === item.id)}
                                        onClick={() => {props.follow(item.id)}}>
                                    Unfollow
                                </button>
                            )}
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
                );
            })}
        </div>
    );
};

export default Users;
