import React from "react"
import axios from "axios"
import { ConnerText } from "./ContextHolder"
export default function Form() {
    const {ugly} = React.useContext(ConnerText)
    const [uglier, setUglier] = ugly
    function handleChange(e) {
        setUglier(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick(e) {
        e.preventDefault()
        const api = "https://api.vschool.io/postaldude/thing"
        axios.post(api, uglier)
        .then(() => {
            console.log("posty posted capn")
            setUglier({
                title : "",
                description : "",
                imgUrl : ""
            })
        }
        )
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>ugly things website</h1>
            <h4>or as elon musk likes to call it, X</h4>
            <form>
                <input placeholder = "title" name = "title" onChange = {handleChange}/>
                <input placeholder = "description" name = "description" onChange = {handleChange}/>
                <input placeholder = "imgUrl" name = "imgUrl" onChange = {handleChange}/>
                <button onClick = {handleClick} type = "button" >microwave it!</button>
            </form>
        </div>
    )
}