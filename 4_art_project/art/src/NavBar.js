import React from "react"
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const divStyle = {
        "backgroundColor" : "black",
        "color" : "white",
        "border" : "2px solid white",
        "display" : "flex",
        "paddingTop" : "0px",
    }
    const titleStyle = {
        "paddingLeft" : "100px",
        "fontSize" : "30px",
        "marginTop" : "10px"
    }
    const link1Style = {
        "paddingLeft" : "725px",
        "marginTop" : "15px",
        "fontSize" : "20px",
        "color" : "white"
    }
    const linkStyle = {
        "paddingLeft" : "10px",
        "marginTop" : "15px",
        "fontSize" : "20px",
        "color" : "white"
    }
    const [divState, setDivState] = React.useState(divStyle)
    const [titleState, setTitleState] = React.useState(titleStyle)
    const [link1State, setLink1State] = React.useState(link1Style)
    const [linkState, setLinkState] = React.useState(linkStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallDivStyle = {
                "backgroundColor" : "black",
                "color" : "white",
                "display" : "grid",
                "gridTemplateColumns" : "1fr 1fr 1fr 1fr"
            }
            const smallTitleStyle = {
              "display" : "none"
            }
            const smallLinkStyle = {
                "fontSize" : "20px",
                "color" : "white",
                "textAlign" : "center",
                "paddingTop" : "5px",
                "paddingBottom" : "15px"
            }
            setDivState(smallDivStyle)
            setTitleState(smallTitleStyle)
            setLink1State(smallLinkStyle)
            setLinkState(smallLinkStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    return (
        <div style = {divState}>
            <h3 style = {titleState}>COOL ART</h3>
            <NavLink to = "/" style = {link1State}>Home</NavLink>
            <NavLink to = "/Depression" style = {linkState}>Depression</NavLink>
            <NavLink to = "/Psychosis" style = {linkState}>Psychosis</NavLink>
            <NavLink to = "/Ptsd" style = {linkState}>PTSD</NavLink>
        </div>
    )
}