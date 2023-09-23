import React from "react";
import { Link } from "react-router-dom"
export default function NavBar(props) {
    // console.log('in navbar component')
    const navStyle = {
        border : "2px solid #adadc9",
        backgroundColor : "#2a3439",
        color : "#adadc9",
        height : "60px",
        paddingTop : "20px"
    }
    const linkStyle = {
        color : "#adadc9",
        paddingLeft: "300px",

    }
    const buttonStyle = {
        marginLeft : "300px"
    }
    return (
        <nav style = {navStyle}>
            <Link to = "/Profile" style = {linkStyle}>profile</Link>
            <Link to = "/Public" style = {linkStyle}>public</Link>
            <button onClick={props.logout} style = {buttonStyle}>log out</button>

        </nav>
    )
}