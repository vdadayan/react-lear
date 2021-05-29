import React from 'react';
import './Users.scss';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: "https://s7.cdn.eg.ru/wp-content/uploads/2020/05/nag-pre022109.jpg", followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukrain'}},
        ])
    } 

    return <div className="users-wrapper">
        {
            props.users.map((item) => {
                return (
                    <div key={item.id} className="user">
                        <div className="user-nav">
                            <img src={item.photoUrl} alt="avatar" />
                            {item.followed 
                            ? <button onClick={() => {props.unfollow(item.id)}}>Follow</button> 
                            : <button onClick={() => {props.follow(item.id)}}>Unfollow</button>}
                        </div>
                        <div className="user-info">
                            <div>
                                <div>{item.fullName}</div>
                                <div>{item.status}</div>
                            </div>
                            <div>
                                <div>{item.location.country}</div>
                                <div>{item.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </div>
}

export default Users;