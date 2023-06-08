import React from "react"
export default function Form(props) {
    const [inputData, setInputData] = React.useState({title: ""})
    function handleSubmit(e){
        console.log(props.data.length)
        console.log(e)
        e.preventDefault()
        props.setData(prev => {
            return (
                [...prev,
                inputData]
            )
        })
    }
    function handleChange(e) {
        console.log(e.target)
        const {name, value} = e.target
        setInputData(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(inputData, "this is inputData lol")
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input onChange = {handleChange} placeholder = "insert name here lol" name = "title" value = {inputData.title} />
            <button>submit</button>
        </form>
    )
}