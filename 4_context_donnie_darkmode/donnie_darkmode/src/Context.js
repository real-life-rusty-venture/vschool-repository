import React from "react"
const contexticle = React.createContext()
function Context(props) {
    const [color, setColor] = React.useState("dark")
    const toggleTheme = () => {
        setColor(prev => prev === "dark" ? "light" : "dark")
    }
    return (
        <Context value = {{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </Context>
    )
}
export {contexticle, Context} //broken here