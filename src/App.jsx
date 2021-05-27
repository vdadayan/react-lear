import './App.scss';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App(props) {
  return (
      <div className="wrapper">
        <Header/>
        <Content />
        <Footer/>
      </div>
  );
}

export default App;
