import { contexticle } from "./Context"
import React from React
export default function Header() {
    const {color} = React.useContext(contexticle)
    return (
        <div className = {color}>
            <h1>header!</h1>
            <h2>i think i might passout</h2>
        </div>
    )
}