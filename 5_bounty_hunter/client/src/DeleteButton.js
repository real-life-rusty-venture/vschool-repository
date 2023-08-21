import React from "react";
import axios from "axios";
import { ConnerText } from "./ContextHolder";
export default function DeleteButton(props) {
    const {formerData, dumberFlipper, editerData} = React.useContext(ConnerText)
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    // const [dumbFlipper, setDumbFlipper] = React.useState(false)
    function handleClick() {
        const api = `/bounty/${props.id}`
        axios.delete(api)
        .then(setDumbFlipper(prev => !prev))
        .catch(err => console.log(err))
    }
    return (
        <button onClick = {handleClick} > they call it a cheese royale</button>
    )
}
//delete button works swell!