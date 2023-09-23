import React from "react";
import { Link } from "react-router-dom"
export default function NavBar(props) {
    // console.log('in navbar component')
    return (
        <div>
            <Link to = "/Profile">profile</Link>
            <Link to = "/Public">public</Link>
            <button onClick={props.logout}>log out</button>

        </div>
    )
}