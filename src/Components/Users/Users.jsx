import * as axios from "axios";
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
                        <span
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                            className={props.currentPage === p ? "selected-page" : ""}
                        >
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
                                <button
                                    onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "720e621c-22bc-48be-a9e1-c157c873fe78"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(item.id);
                                                }
                                            })
                                    }}
                                >
                                    Follow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "720e621c-22bc-48be-a9e1-c157c873fe78"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(item.id);
                                                }
                                            })
                                    }}
                                >
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
