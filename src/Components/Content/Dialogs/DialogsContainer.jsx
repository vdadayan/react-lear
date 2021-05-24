import React from 'react';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import Dialogs from './Dialogs';
import './Dialogs.scss';

const DialogsContainer = ({dialogs ,message, messageBody, dispatch}) => {

    let onSendMessageClick = () => {
        dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        dispatch(updateNewMEssageBodyCreator(body))
    }

    return(
        <Dialogs updeteNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogs={dialogs} message={message} messageBody={messageBody}/>
    );
}

export default DialogsContainer;