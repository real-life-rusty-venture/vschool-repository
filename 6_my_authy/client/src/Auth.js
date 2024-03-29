import React from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "./context/userContextProvider";
export default function Auth() {
    const formData = {username: "", password: ""}
    const [inputs, setInputs] = React.useState(formData)
    const [flipper, setFlipper] = React.useState(false)
    const { signup, login } = React.useContext(UserContext)
    function handleChange(e) {
        const { name, value } = e.target
        // console.log('name', name, 'value', value)
        setInputs(prev => ({
            ...prev,
            [name]: value
        
        }
        ))
    }
    function handleSignup(e) {
        e.preventDefault()
        // console.log('inside signup', inputs)
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }
    return (
        <div>
            <h1>something something something</h1> 
            {!flipper ? 
            <div>
                <AuthForm
                handleClick = {handleLogin}
                buttonText = "login"
                offer = "new here?"
                inputs = {inputs}
                handleChange = {handleChange}
                setFlipper = {setFlipper}
                />
            </div>
        :
        <div>
            <AuthForm
            handleClick = {handleSignup}
            buttonText = "sign up"
            offer = "come here often?"
            inputs = {inputs}
            handleChange = {handleChange}
            setFlipper = {setFlipper}
            />
        </div>
        }
        {/* <h1>STEADY AS SHE GOES</h1> */}
        </div>
    )
}