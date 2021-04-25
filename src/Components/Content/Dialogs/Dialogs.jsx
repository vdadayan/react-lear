import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';

const Dialogs = ({dialogs ,message}) => {

    return(
        <div className="dialogs">
            <div className="dialogs-items">

                {dialogs.map((item) => {
                    return(
                        <DialogItem name={item.name} id={item.id}/>
                    )
                })}
            </div>
            <div className="messages">
                {message.map((item) => {
                    return(
                        <Message text={item.message}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Dialogs;