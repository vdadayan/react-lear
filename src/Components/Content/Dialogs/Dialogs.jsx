import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import './Dialogs.scss';

const Dialogs = (props) => {

    let dialogs = props.dialogs.dialogs;
    let message = props.dialogs.message;
    let sendMessage = props.sendMessage;

    const addNewMessage = (value) => {
        sendMessage(value.newMessageBody)
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
                    <DialogReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const DialogForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageBody" placeholder="Enter your message" component="textarea"/>
            </div>
            <button>Send</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialogs'})(DialogForm)

export default Dialogs;