import React from "react";
import axios from "axios";
import { ConnerText } from "./ContextHolder";
export default function DeleteButton(props) {
    // const [uselessDeleteState, setUselessDeleteState] = React.useState(0)
    const {uselessDeleteState} = React.useContext(ConnerText)
    const [DeleteState, setDeleteState] = uselessDeleteState
    function handleClick() {
        const api = `https://api.vschool.io/postaldude/thing/${props.id}`
        axios.delete(api)
        .then(() => {
            console.log("deletey deleted dumbass")
            setDeleteState(prev => prev + 1)
        })
        .catch(err => console.log(err))
    }
    return (
        <button onClick = {handleClick}>i hate it! GET RID OF IT!</button>
    )
}
