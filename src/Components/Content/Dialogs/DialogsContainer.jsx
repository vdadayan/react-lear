import React from 'react';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';
import './Dialogs.scss';

const DialogsContainer = (props) => {

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMEssageBodyCreator(body))
                    }
                    return(
                        <Dialogs updeteNewMessageBody={onNewMessageChange} 
                                sendMessage={onSendMessageClick}
                                dialogs={store.getState().messagesPage.dialogs} 
                                message={store.getState().messagesPage.message} 
                                messageBody={store.getState().messagesPage.newMessageBody}/>
                        
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;