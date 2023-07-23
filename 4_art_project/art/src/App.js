import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Footer from './Footer';
// import RouterHolder from './RouterHolder';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Depression from "./Depression"
import Psychosis from "./Psychosis"
import Ptsd from "./Ptsd"
import {ContextHolder, ConnerText} from "./ContextHolder"
function App() {
  // const divStyle = {
  //   "backgroundColor" : "#303030",
  //   "color" : "3e0e0e0",
  //   "display" : "grid",
  //   "gridTemplateColumns" : "1fr 1fr 1fr 1fr"
  // }
  // const artCardStyle = {
  //   "border" : "2px solid white",
  //   "textAlign" : "center"
  // }
  // const imageStyle = {
  //   "height" : "200px"
  // }
  // const Context = React.createContext()
  //   const Provider = props => {
  //   const [divValue, setDivValue] = React.useState(divStyle)
  //   const [artCardValue, setArtCardValue] = React.useState(artCardStyle)
  //   const [imageValue, setImageValue] = React.useState(imageStyle)
  // return (
  //   <Context.Provider
  //     value = {{ divValue: [divValue, setDivValue], artCardValue: [artCardValue, setArtCardValue], imageValue: [imageValue, setImageValue] }}
  //   >
  //     {props.children}
  //   </Context.Provider>
  // )
  //  }
  const divStyle = {
    "backgroundColor" : "#303030"
  }
  return (
    <div style = {divStyle}>

      <ContextHolder>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Depression"  element = {<Depression/>}/>
          <Route path = "/Psychosis"  element = {<Psychosis/>}/>
          <Route path = "/Ptsd" element = {<Ptsd/>}/>
        </Routes>
        <Footer/>
      </ContextHolder>
    </div>
  );
}

export default App;