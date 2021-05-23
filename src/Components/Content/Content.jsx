import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import './Content.scss';
import { BrowserRouter, NavLink, Route, Router } from 'react-router-dom';

const Content = ({dialogs, message, posts, newPostText, dispatch}) => {
    return(
        <BrowserRouter>
            <div className="content">
                <nav>
                    <ul>
                        <li><NavLink to="/Profile">Profile</NavLink></li>
                        <li><NavLink to="/Dialogs">Messages</NavLink></li>
                        <li><a to="#">News</a></li>
                        <li><a to="#">Music</a></li>
                        <li><a to="#">Settings</a></li>
                    </ul>
                </nav>
                <Route path="/Profile" render={() => <Profile dispatch={dispatch} posts={posts} newPostText={newPostText}/>}/>
                <Route path="/Dialogs" render={() => <Dialogs dialogs={dialogs} message={message}/>}/>
            </div> 
        </BrowserRouter>
    )
}

export default Content;