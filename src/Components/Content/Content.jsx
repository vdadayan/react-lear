import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import './Content.scss';

const Content = (props) => {
    return(
            <div className="content">
                <nav>
                    <ul>
                        <li><NavLink to="/Profile">Profile</NavLink></li>
                        <li><NavLink to="/Dialogs">Messages</NavLink></li>
                        <li><NavLink to="/Users">Users</NavLink></li>
                        <li><a href="/#">News</a></li>
                        <li><a href="/#">Music</a></li>
                        <li><a href="/#">Settings</a></li>
                    </ul>
                </nav>
                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/Dialogs" render={() => <DialogsContainer />}/>
                <Route path="/Users" render={() => <UsersContainer />}/>
            </div> 
    )
}

export default Content;