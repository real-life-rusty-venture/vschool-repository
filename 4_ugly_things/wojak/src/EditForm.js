import React from "react"
import axios from "axios"
import {Contextody} from "./Contexty"
export default function EditForm(props) {
    const [uglyEdit, setUglyEdit] = React.useState({
        imgUrl: "",
        title: "",
        description: ""
    })
    const testy = React.useContext(Contextody)
    function handleChange(e) {
        setUglyEdit(prev => (
            {
                ...prev,
                [e.target.name] : e.target.value,
        }
        ))
    }
    function handleSubmit(e, id) {
        e.preventDefault()
        axios.put(`https://api.vschool.io/johnfkennedy/thing/${id}`, uglyEdit).then(res => {
        //mkay changed post to put
        //now im getting error status code 500
        //apparently thats a vague "something is wrong" error?? my computer is me when im having a panic attack lol
        //replace me!
            console.log(res)
            console.log("^^^^^^^^^^^^^res")
            console.log(testy)
            console.log("^^^^^^testy")
            testy.setApi(prev => {return [...prev, res.data]}) //replace me!
    })
    }
    return props.showReddit && (
        <form onSubmit = {handleSubmit}>
            <input placeholder = "new image url" name = "imgUrl" onChange = {handleChange}/>
            <input placeholder="new title" name = "title" onChange = {handleChange}/>
            <textarea placeholdeer = "new description" name = "description" onChange = {handleChange}></textarea>
            <button>just cried 😎</button>
        </form>
    )
}