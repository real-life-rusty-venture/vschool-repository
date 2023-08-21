import React from "react";
import axios from "axios";
import { ConnerText } from "./ContextHolder";
export default function EditForm(props) {
    const {formerData, dumberFlipper, editerData} = React.useContext(ConnerText)
    const [editData, setEditData] = editerData
    // const [editData, setEditData] = React.useState({
    //     "firstName" : "",
    //     "lastName" : "",
    //     "living" : false,
    //     "age" : 0,
    //     "gender" : ""
    // })

    const defaultEdit = {
        "firstName" : "",
        "lastName" : "",
        "living" : false,
        "age" : 0,
        "gender" : ""
    }
    function handleChange(e) {
        setEditData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        console.log(editData)
        const api = `/bounty/${props.id}`
        axios.put(`/bounty/${props.id}`, editData)
        .then(setEditData(defaultEdit))
        .catch(err => console.log(err))
    }
    return (
        <form>
            <input name = {"firstName"} placeholder="first name edit" onChange={handleChange}/>
            <input name = {"lastName"} placeholder="last name edit" onChange={handleChange}/>
            <input name = {"living"} placeholder="is the guy still living? edit" type = "checkbox" onChange={handleChange}/>
            <input name = {"age"} type = "number" placeholder="how old is the guy? edit" onChange={handleChange}/>
            <input name = {"gender"} placeholder="what gender does the guy idenity as edit" onChange={handleChange}/>
            <button onClick = {handleClick} type = "button">sure. edit it. why not. who cares anymore</button>
        </form>
    )
}