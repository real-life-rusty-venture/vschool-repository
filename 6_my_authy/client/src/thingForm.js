import React from "react";
export default function ThingForm(props) {
    const initInputs = {
        title : "",
        description : "",
        imgUrl : ""
    }
    const [inputs, setInputs] = React.useState(initInputs)
    function handleChange(e) {
        setInputs(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        props.addThing(inputs)
        setInputs(initInputs)
    }
    return (
        <form>
            <input placeholder="title" name="title" onChange={handleChange}/>
            <input placeholder="description" name = "description" onChange={handleChange}/>
            <input placeholder="imgUrl" name = "imgUrl" onChange={handleChange}/>
            <button type = "button" onClick={handleClick}>bloody sunday</button>
        </form>
    )
}