import React from "react";
import axios from "axios";
const ConnerText = React.createContext()
function ContextHolder(props) {
    const [ugly, setUgly] = React.useState({
        title : "",
        description : "",
        imgUrl : ""
    })
    const [uglyEdit, setUglyEdit] = React.useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    const [uselessDeleteState, setUselessDeleteState] = React.useState(0)
    return (
        <ConnerText.Provider value = {{
            ugly : [ugly, setUgly],
            uglyEdit : [uglyEdit, setUglyEdit],
            uselessDeleteState : [uselessDeleteState, setUselessDeleteState]
        }}>
            {props.children}
        </ConnerText.Provider>
    )
}
export {ConnerText, ContextHolder}