import React from "react";
export default function ContactMe() {
    const [formData, setFormData] = React.useState({
        name : "",
        phoneNumber : "",
        email : "",
        message : ""
    })
    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    //i dont think i even need this function??
    const formStyle = {
        paddingLeft : "90px",
        paddingRight : "90px",
        paddingTop : "55px",
        height : "550px"
    }
    const inputStyle = {
        display : "block",
        marginLeft : "400px",
        width : "350px",
        height : "50px"
    }
    const buttonStyle = {
        display : "block",
        marginLeft : "400px",
        width : "350px",
        height : "50px",
        backgroundColor : "#1B1212",
        color : "#E5E4E2"
    }
    return (
        <form action="https://formsubmit.co/ariannabrunson47@gmail.com" method="POST" style = {formStyle}>
            <input name = "name" placeholder = "name" style = {inputStyle} />
            <input name = "phoneNumber" placeholder = "phone number" style = {inputStyle} />
            <input name = "email" placeholder = "email" style = {inputStyle} />
            <textarea name = "message" placeholder = "message" style = {inputStyle} />
            <button style = {buttonStyle} >thank you for your message!</button>
        </form>
    )
}