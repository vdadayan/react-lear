import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.scss';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = props.dialogs.dialogs;
    let message = props.dialogs.message;
    let sendMessage = props.sendMessage;
    let updeteNewMessageBody = props.updeteNewMessageBody;
    let messageBody = props.messageBody;

    let onSendMessageClick = () => {
        sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;

        updeteNewMessageBody(body)
    }

    return(
        <div className="dialogs">
            <div className="dialogs-items">

                {dialogs.map((item) => {
                    return(
                        <DialogItem key={item.id} name={item.name} id={item.id}/>
                    )
                })}
            </div>
            <div className="messages">
                {message.map((item) => {
                    return(
                        <Message key={item.id} text={item.message}/>
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