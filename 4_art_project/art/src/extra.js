import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Depression from "./Depression"
import Psychosis from "./Psychosis"
import Ptsd from "./Ptsd"
export  default function RouterHolder() {
    return (
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Depression"  element = {<Depression/>}/>
          <Route path = "/Psychosis"  element = {<Psychosis/>}/>
          <Route path = "/Ptsd" element = {<Ptsd/>}/>
        </Routes>
    )
}