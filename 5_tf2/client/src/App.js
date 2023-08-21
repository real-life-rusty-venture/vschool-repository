import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Defense from './Defense';
import Offense from './Offense';
import Support from './Support';
import AllMercs from './AllMercs';

function App() {
  const divStyle = {
    backgroundColor : "#ff6868"
  }
  return (
    <div style = {divStyle}>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Defense" element = {<Defense/>}/>
        <Route path = "/Offense" element = {<Offense/>}/>
        <Route path = "/Support" element = {<Support/>}/>
        <Route path = "/AllMercs" element = {<AllMercs/>}/>
      </Routes>
    </div>
  );
}

export default App;
