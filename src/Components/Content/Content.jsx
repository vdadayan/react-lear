import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import './Content.scss';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

const Content = ({dialogs, message, posts, newPostText, dispatch, messageBody}) => {
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
                <Route path="/Dialogs" render={() => <Dialogs dispatch={dispatch} dialogs={dialogs} message={message} messageBody={messageBody}/>}/>
            </div> 
        </BrowserRouter>
    )
}

export default Content;