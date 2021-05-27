import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import Dialogs from './Dialogs';
import './Dialogs.scss';

// const DialogsContainer = (props) => {

//     return(
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
                
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMEssageBodyCreator(body))
//                     }
//                     return(
//                         <Dialogs updeteNewMessageBody={onNewMessageChange} 
//                                 sendMessage={onSendMessageClick}
//                                 dialogs={store.getState().messagesPage.dialogs} 
//                                 message={store.getState().messagesPage.message} 
//                                 messageBody={store.getState().messagesPage.newMessageBody}/>
                        
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        message: state.messagesPage.message,
        messageBody: state.messagesPage.messageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updeteNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMEssageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;