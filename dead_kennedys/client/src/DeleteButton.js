import React from "react";
import axios from "axios";
import { ConnerText } from "./ContextHolder";
export default function DeleteButton(props) {
    const {formerData, dumberFlipper, editerData} = React.useContext(ConnerText)
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    // const [dumbFlipper, setDumbFlipper] = React.useState(false)
    function handleClick() {
        // console.log("well at last the delete handleClick is firing")
        const api = `/bounty/${props.id}`
        // console.log(props.id)
        axios.delete(`bounty/${props.id}`)
        .then(() => {
            setDumbFlipper(prev => !prev)
            // console.log("deletey api request seemingly handled")
            // console.log(dumbFlipper)
        })
        .catch(err => console.log(err))
    }
    return (
        <button onClick = {handleClick} > they call it a cheese royale</button>
    )
}