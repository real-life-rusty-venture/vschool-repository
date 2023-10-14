import React from "react";
// import { UserContext } from "./context/userContextProvider"

export default function AuthForm(props) {
    const { inputs : {username, password}, handleClick, buttonText, handleChange, setFlipper, offer} = props
    // const {resetAuthErr, errMsg} = React.useContext(UserContext)
    function toggleForm() {
        setFlipper(prev => !prev)
        // resetAuthErr()
    }
    return (
        <form>
            <input placeholder = "username" name = "username" defaultValue = {username} onChange = {handleChange} />
            <input placeholder = "password" name = "password" defaultValue = {password} onChange = {handleChange}/>
            <button onClick={handleClick} type = "button" >{buttonText}</button>
            <h4 onClick={toggleForm}>{offer}</h4>
            {/* <p>{errMsg}</p> */}
        </form>
    )
}