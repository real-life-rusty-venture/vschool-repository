import React from "react"
export default function Contact() {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        body: ""
    })
    function handleChange(e) {
        setData({
            [e.target.name] : e.target.value
        })
    }
    return (
        <form>
            <input name = "firstName" placeholder = "first name" onChange = {handleChange}></input>
            <input name = "lastName" placeholder = "last name" onChange = {handleChange}></input>
            <input type = "email" name = "email" placeholder="email" onChange = {handleChange}></input>
            <input name = "subject" placeholder = "subject" onChange = {handleChange}></input>
            <textarea name = "body" placeholder = "body" onChange = {handleChange}></textarea>
            <button>send me pictures of guys spread out assholes</button>
        </form>
    )
}