import './App.scss';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App({state, dispatch}) {
  return (
      <div className="wrapper">
        <Header/>
        <Content dispatch={dispatch}
         dialogs={state.messagesPage.dialogs}
        message={state.messagesPage.message}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        messageBody={state.messagesPage.messageBody}/>
        <Footer/>
      </div>
  );
}

export default App;
