import React from "react";
import { UserContext } from "./context/userContextProvider";
export default function Comment(props) {
    // console.log("comment component firing")
    return (
        <div>
            <p>{props.user}</p>
            <h6>{props.text}</h6>
        </div>
    )
}