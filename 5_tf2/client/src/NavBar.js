import { NavLink } from "react-router-dom";
export default function NavBar() {
    const divStyle = {
        border : "2px solid white",
        display : "grid",
        gridTemplateColumns : "1fr 1fr 1fr 1fr 1fr",
        textAlign : "center",
        paddingTop : "10px",
        paddingBottom : "15px",
        backgroundColor : "#71afff",
    }
    const linkStyle = {
        color : "black"
    }
    return (
        <div style = {divStyle}>
            <NavLink to = "/" style = {linkStyle} >HOME</NavLink>
            <NavLink to = "/AllMercs" style = {linkStyle}>ALL MERCS</NavLink>
            <NavLink to = "/Offense" style = {linkStyle} >OFFENSE</NavLink>
            <NavLink to = "/Defense" style = {linkStyle} >DEFENSE</NavLink>
            <NavLink to = "/Support" style = {linkStyle} >SUPPORT</NavLink>
        </div>
    )
}
//offense defense and support components dont exist yet but they will!