import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from './context/userContextProvider';
import React from 'react';
import Auth from "./Auth"
import Profile from "./Profile"
import Public from './Public';
import NavBar from "./NavBar"
function App() {
  const { token, logout } = React.useContext(UserContext)
  return (
    <div>
      <NavBar logout = {logout}/>
        
      <Routes>
        <Route
        exact path = "/"
        element = {token ? <Navigate to = "/profile"/> : <Auth/>}
        />
        <Route 
          path = "/profile"
          element = {<Profile/>}
          />
          <Route 
          path = "/public"
          element = {<Public/>}
          />
        </Routes>
    </div>
  );
}
export default App;



//all i need is for the edit and delete functionality to be hooked up,
//and to sort public posts by most likes,
//and likes and comments functionality
