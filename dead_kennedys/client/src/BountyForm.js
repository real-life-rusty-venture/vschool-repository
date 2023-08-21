import React from "react";
import axios from "axios"
import { ConnerText } from "./ContextHolder";
export default function BountyForm() {
    // const [formData, setFormData] = React.useState({
    //     "firstName" : "",
    //     "lastName" : "",
    //     "living" : false,
    //     "age" : 0,
    //     "gender" : ""
    // })
    const {formerData, dumberFlipper, editerData} = React.useContext(ConnerText)
    const [formData, setFormData] = formerData
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    const [editForm, setEditData] = editerData
    const defaultData = {
        "firstName" : "",
        "lastName" : "",
        "living" : false,
        "age" : 0,
        "gender" : ""
    }
    React.useEffect(() => {
        // console.log(formerData)
        // console.log(dumbFlipper)
        // console.log(editForm)
    }, [])
    function handleChange(e) {
        const checked = e.target.checked
        console.log(checked)
        //this does not work
        setFormData(prev => ({
            ...prev,
            living : checked ,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        const api = "/bounty"
        axios.post(api, formData)
        .then(setFormData(defaultData))
        .catch(err => console.log(err))
    }
    return (
        <form>
            <input name = {"firstName"} placeholder="first name" onChange={handleChange}/>
            <input name = {"lastName"} placeholder="last name" onChange={handleChange}/>
            <input name = {"living"} placeholder="is the guy still living?" type = "checkbox" onChange={handleChange}/>
            <input name = {"age"} type = "number" placeholder="how old is the guy?" onChange={handleChange}/>
            <input name = {"gender"} placeholder="what gender does the guy idenity as" onChange={handleChange}/>
            <button onClick = {handleClick} type = "button">I DONT REMEMBER ASKING YOU A THING</button>
        </form>
    )
}