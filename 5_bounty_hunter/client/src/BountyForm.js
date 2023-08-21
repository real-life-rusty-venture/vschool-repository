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
        console.log(formerData)
        console.log(dumbFlipper)
        console.log(editForm)
    }, [])
    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        const api = "/bounty"
        axios.post(api, formData)
        //this post function somehow only works half the time
        //seemingly at random
        .then(res => 
            console.log('inside handleclick', res.data),
            setFormData(defaultData))
         
        .catch(err => console.log(err))
    }
    return (
        <form>
            <input name = {"firstName"} placeholder="first name" onChange={handleChange} value = {formData.firstName}/>
            <input name = {"lastName"} placeholder="last name" onChange={handleChange} value = {formData.lastName}/>
            <input name = {"living"} placeholder="is the dude still living?" type = "checkbox" onChange={handleChange} value = {formData.living}/>
            <input name = {"age"} type = "number" placeholder="how old is the dude?" onChange={handleChange} value = {editForm.age}/>
            <input name = {"gender"} placeholder="what gender does the dude idenity as" onChange={handleChange} value = {formData.gender}/>
            <button onClick = {handleClick} type = "button">dogs watching television</button>
        </form>
    )
}