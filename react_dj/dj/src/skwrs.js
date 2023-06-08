import React from "react"
export default function Skwrs(props) {
    return (
        <div className="skwr" style = {{backgroundColor: props.color}} onClick={() => props.toggle(props.id, props.color)}>
            <h1>skwr</h1>
        </div>
    )
}