import React from "react";
import { UserContext } from "../context/UserContextProvider";
export default function LikeButton(props) {

    console.log("props.upVotesLength", props.upVotesLength)
    const [flipper, setFlipper] = React.useState(false)
    const { like } = React.useContext(UserContext)
    function handleClick() {
        setFlipper(prev => !prev)
        like(props._id)
    }
    const buttonText = !flipper ? "i like this!" : "i HATE this!"
    const divStyle = {
        display : "inline"
    }
    return (
    <div style = {divStyle}>
        <button type = "button" onClick = {handleClick}>{buttonText}</button>
        <p>{props.upVotesLength}</p>
    </div>
//     <div>
//     <h1>something something something</h1> 
//     {!flipper ? 
//     <div>
//         <LikeButton
//         type = "button"
//         onClick = {handleClick}
//         />
//     </div>
// :
// <div>
//     <AuthForm
//     handleClick = {handleSignup}
//     buttonText = "sign up"
//     offer = "come here often?"
//     inputs = {inputs}
//     handleChange = {handleChange}
//     setFlipper = {setFlipper}
//     />
// </div>
// }
// {/* <h1>STEADY AS SHE GOES</h1> */}
// </div>
    )
}