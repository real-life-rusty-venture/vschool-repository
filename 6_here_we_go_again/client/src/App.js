import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from './context/UserContextProvider';
import React from 'react';
import Auth from "./Auth"
import ProfilePage from "./ProfilePage"
import PublicPage from './PublicPage';
import NavBar from "./NavBar"
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  const { token, logout } = React.useContext(UserContext)
  return (
    <div>
    {token && <NavBar logout = {logout}/>}
      
    <Routes>
      <Route
      exact path = "/"
      element = {token ? <Navigate to = "/profile"/> : <Auth/>}
      />
      <Route 
        path = "/profile"
        element = {<ProtectedRoutes token = {token} redirectTo = "/">
              <ProfilePage/>
          </ProtectedRoutes>
        }
        />
        <Route 
        path = "/public"
        element = {<ProtectedRoutes token =  {token} redirectTo = "/">
            <PublicPage/>
          </ProtectedRoutes>
        }
        />
      </Routes>
  </div>
  );
}

export default App;
