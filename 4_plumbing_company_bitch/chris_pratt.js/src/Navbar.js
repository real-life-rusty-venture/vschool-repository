import {NavLink, Link} from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            <h1>navbar!</h1>
            <ul>
                <li>
                    <NavLink to = "/">
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/About">
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/Services">
                        services
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}