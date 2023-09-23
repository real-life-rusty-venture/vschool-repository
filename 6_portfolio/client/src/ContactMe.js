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
    return (
        <form action="https://formsubmit.co/ariannabrunson47@gmail.com" method="POST">
            <input name = "name" placeholder = "name"/>
            <input name = "phoneNumber" placeholder = "phone number"/>
            <input name = "email" placeholder = "email"/>
            <textarea name = "message" placeholder = "message"/>
            <button>thank you for your message!</button>
        </form>
    )
}