import React from "react";
import { UserContext } from "./context/userContextProvider";
export default function LikeButton(props) {
    const { like } = React.useContext(UserContext)
    function handleClick() {
        like()
    }
    return (
        <button type = "button" onClick = {handleClick}>i like this!</button>
    )
}