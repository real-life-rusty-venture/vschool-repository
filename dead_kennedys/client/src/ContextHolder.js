import React from "react";
import axios from "axios";
const ConnerText = React.createContext()
function ContextHolder(props) {
    const [formData, setFormData] = React.useState({
        "firstName" : "",
        "lastName" : "",
        "living" : false,
        "age" : 0,
        "gender" : ""
    })
    const [dumbFlipper, setDumbFlipper] = React.useState(false)
    const [editData, setEditData] = React.useState({
        "firstName" : "",
        "lastName" : "",
        "living" : false,
        "age" : 0,
        "gender" : ""
    })
    return (
        <ConnerText.Provider value = {{
            formerData : [formData, setFormData],
            dumberFlipper : [dumbFlipper, setDumbFlipper],
            editerData : [editData, setEditData]
        }}>
            {props.children}
        </ConnerText.Provider>
    )
}
export {ConnerText, ContextHolder}