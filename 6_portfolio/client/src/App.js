import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import ContactMe from './ContactMe';
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom"
function App() {
  const divStyle = {
    backgroundColor : "#E5E4E2",
    color : "#1B1212",
    font : "#36454F"
}
  return (
    <div style = {divStyle}>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Projects" element = {<Projects/>}/>
        <Route  path = "/ContactMe" element = {<ContactMe/>}/>
      </Routes>
    </div>
  )
}

export default App;
