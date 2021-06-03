import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import Dialogs from './Dialogs';
import './Dialogs.scss';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage,
        messageBody: state.messagesPage.messageBody,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updeteNewMessageBody: (body) => {
            dispatch(updateNewMEssageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;