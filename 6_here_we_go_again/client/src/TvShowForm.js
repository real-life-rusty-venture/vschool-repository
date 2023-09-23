import React from "react"
export default function TvShowForm(props) {
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
    function handleClick(e) {
        e.preventDefault()
        // console.log("inputs", inputs)
        props.addShow(inputs)
        setInputs(initInputs)
    }
    return  (
        <form>
            <input placeholder="title" name = "title" onChange = {handleChange} />
            <input placeholder="description" name = "description" onChange = {handleChange} />
            <input placeholder="imgUrl" name = "imgUrl" onChange = {handleChange} />
            <button onClick =  {handleClick} >add a tv show NOW!!!!</button>
        </form>
    )
}