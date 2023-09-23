import React from "react";
import { UserContext } from "./context/userContextProvider";
export default function DeleteButton() {
    const { deleteButton } = React.useContext(UserContext)
    return (
        <div>
            <button onClick={deleteButton}>delete me NOW</button>
        </div>
    )
}