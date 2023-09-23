import React from "react";
import { NavLink } from "react-router-dom"
export default function NavBar() {
    return (
        <nav>
            <h3>some sort of logo</h3>
            <NavLink to = "/">HOME</NavLink>
            <NavLink to = "/Projects">PROJECTS</NavLink>
            <NavLink to = "/ContactMe">CONTACT</NavLink>
        </nav>
    )
}