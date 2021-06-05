import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';
import { sendMessageCreator, updateNewMEssageBodyCreator } from '../../../Redux/reducers/dialogReducer';
import Dialogs from './Dialogs';
import './Dialogs.scss';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage,
        messageBody: state.messagesPage.messageBody,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect

)(Dialogs);