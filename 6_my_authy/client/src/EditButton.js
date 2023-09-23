import React from "react";
import { UserContext } from "./context/userContextProvider";
export default function EditButton() {
    const { editFlipper, setEditFlipper } = React.useContext(UserContext)
    function flipIt() {
        setEditFlipper(prev => !prev)
    }
    const buttonText = () => {
        if (editFlipper) {
            return "take me back please"
        }
        if (!editFlipper) {
            return "edit me NOW!!!!!!!!"
        }
    }
    return (
        <button onClick={setEditFlipper}>{buttonText}</button>
    )
}