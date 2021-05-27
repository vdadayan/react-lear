import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';
import './Content.scss';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';

const Content = (props) => {
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
                <Route path="/Profile" render={() => <Profile/>}/>
                <Route path="/Dialogs" render={() => <DialogsContainer />}/>
            </div> 
        </BrowserRouter>
    )
}

export default Content;