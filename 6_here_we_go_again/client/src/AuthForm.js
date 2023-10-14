import React from 'react';
import { UserContext } from './context/UserContextProvider';
export default function AuthForm(props) {
    const {  inputs: { username, password }, handleClick, buttonText, handleChange, setFlipper, offer } = props
    const { resetAuthErr, errMsg } = React.useContext(UserContext)
    function toggleForm() {
        setFlipper(prev => !prev)
        resetAuthErr()
    }
    const formStyle = {
        paddingTop : "20px"
    }
    const pStyle = {
        color : "red"
    }
    return (
        <form style = {formStyle}>
            <input placeholder="username" name ="username" value = {username} onChange = {handleChange}/>
            <input placeholder="password" name ="password" value = {password} onChange = {handleChange} />
            <button onClick={handleClick}>{buttonText}</button>
            <h4 onClick={toggleForm}>{offer}</h4>

            <p style = {pStyle}>{errMsg}</p>
        </form>
    )
}
