import React from "react";
import { UserContext } from "../context/UserContextProvider";
export default function DeleteButton(props) {
    const { deleteButton } = React.useContext(UserContext)
    return (
        <div>
            <button onClick={() => deleteButton(props._id)}>delete me NOW</button>
        </div>
    )
}