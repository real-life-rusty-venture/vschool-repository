import React from "react";
import axios from "axios";
import { ConnerText } from "./ContextHolder";
export default function EditForm(props) {
    const {formerData, dumberFlipper, editerData, editerFlipper} = React.useContext(ConnerText)
    const [editData, setEditData] = editerData
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    const [editFlipper, setEditFlipper] = editerFlipper
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
    const inputData = {
        "firstName" : props.firstName || "",
        "lastName" : props.lastName || "",
        "living" : props.living || false,
        "age" : props.age || 0,
        "gender" : props.gender || ""
    }
    const [inputs, setInputs] = React.useState(inputData)
    function handleChange(e) {
        setEditData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }
    function handleClick() {
        const api = `/bounty/${props.id}`
        console.log(editData)
        console.log("^^^^^^^^editData")
        axios.put(api, editData)
        .then(res => 
            {console.log("inside handleClick" ,res.data)
            // setEditData(defaultEdit)
            setEditFlipper(prev => !prev)
        }
            // console.log("testy")
            //okay so if i leave this empty then my edit function will work as it should
            //it just wont refresh on its own
            //ifi put something, seemingly anything in here,
            //i get an internal server error
            )
        .catch(err => console.log(err))
    }
    return (
        <form>
            <input name = {"firstName"} placeholder="first name edit" onChange={handleChange} value = {inputs.firstName}/>
            <input name = {"lastName"} placeholder="last name edit" onChange={handleChange} value = {inputs.lastName}/>
        <input name = {"living"} placeholder="is the dude still living? edit" type = "checkbox" onChange={handleChange} value = {inputs.living}/>
            <input name = {"age"} type = "number" placeholder="how old is the dude" onChange={handleChange} value = {inputs.age}/>
            <input name = {"gender"} placeholder="what gender does the dude identify as" onChange={handleChange} value = {inputs.gender}/>
            <button onClick = {handleClick} type = "button">edit it man. see if i care</button>
        </form>
    )
}
//note to self fix edit functionality and  post functionality