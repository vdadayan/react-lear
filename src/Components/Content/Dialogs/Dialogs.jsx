import React from 'react';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';

const Dialogs = ({dialogs ,message, messageBody, dispatch}) => {

    let onSendMessageClick = () => {
        dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        dispatch(updateNewMEssageBodyCreator(body))
    }

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
                <div>
                    <div>
                        <textarea value={messageBody} onChange={onNewMessageChange} placeholder="Enter ypur message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;