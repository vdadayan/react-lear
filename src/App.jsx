import './App.scss';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App({state, addPost, updateNewPostText}) {
  return (
      <div className="wrapper">
        <Header/>
        <Content updateNewPostText={updateNewPostText} addPost={addPost} dialogs={state.messagesPage.dialogs} message={state.messagesPage.message} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
        <Footer/>
      </div>
  );
}

export default App;
