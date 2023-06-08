import React from "react"
export default function ShowItButton(props) {
    function showThatThang() {
        props.setShowIt(prev => {
            if (prev === false) {
                return true
            }
            else {
                return false
            }
        })
    }
    return (
        <button onClick = {showThatThang}>show saved memes</button>
    )
}