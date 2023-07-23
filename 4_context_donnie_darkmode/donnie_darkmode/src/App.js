import logo from './logo.svg';
import './App.css';
import Context from "./Context"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
function App() {
  return (
   <Context>
    <Header/>
    <Main/>
    <Footer/>
   </Context>
  );
}

export default App;
