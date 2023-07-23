import Carrd from "./Carrd"
import CodeSnippet from "./CodeSnippet"
import React from "react"
export default function Former() {
    const [data, setData] = React.useState({
        color1: "",
        color2: "",
        angle: ""

    })
    const [flipper, setFlipper] = React.useState(false)
    function handleChange(e){
        // setData({[e.target.name] : e.target.value})
        console.log(e.target.value)
        console.log("^^^^^e.target.value")
    }
    function handleSubmit(e){
        e.preventDefault()
        setData({[e.target.name] : e.target.value})
    }
    //data is not setting right i don not know why
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "color" name = "color1" placeholder = "first fag color" onChange = {handleChange}/>
            <input type = "color" name ="color2" placeholder = "second fag color" onChange = {handleChange}/>
            <input type = "number" name = "angle" placeholder = "angle of my dick up ur ass" onChange = {handleChange}/>
            <button>say it into the mic bitch</button>
            <Carrd data = {data} setFlipper = {setFlipper}/>
            <CodeSnippet data = {data} flipper = {flipper}/>
        </form>
    )
}