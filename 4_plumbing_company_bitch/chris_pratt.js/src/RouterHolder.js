qqimport React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Navbar from "./Navbar"
import Main from "./Main"
import Tarantino from "./Tarantino"
import Homie from "./Homie"
import About from "./About"
import Services from "./Services"
import App from "./App"
export default function RouterHolder() {
    return ( 
            <Routes>
                {/* <Link to = "/">homer</Link>
                <Link to = "/About">about</Link>
                <Link to = "/Services">services</Link> */}
                <Route path = "/" element = {<Homie/>}/> 
                {/* this is the only one that works */}
                <Route path = "about" element = {<About/>}/>
                <Route path = "services" element = {<Services/>}/>
            </Routes>
    )
}