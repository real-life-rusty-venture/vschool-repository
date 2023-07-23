import React from "react"
import axios from "axios"
import { Context, Contextody } from "./Contexty"
export default function Form(props) {
    // const [data, setData] = React.useState({
    //     imgUrl: "",
    //     title: "",
    //     description: "",
    // })
    const {data, setData} = React.useContext(Contextody)
    const {api, setApi} = React.useContext(Contextody)
    function handleChange(e) {
        setData(prev => (
            {
                ...prev,
                [e.target.name] : e.target.value,
        }
        ))
        console.log(data)
    }
    // const response = async function handleSubmit(e) {
    //     e.preventDefault()
    //     axios.post("https://api.vschool.io/johnfkennedy/thing", data)
    //     // .then(res => await res.json)
    //     // .then(res => setApi(res))
    //     axios.post
    //     const dib = response.json()
    //     testy.setApi(dib)
    //     console.log(dib)
    //     console.log("^^^^^^^^^^dib")
    //     console.log(testy.api)
    //     console.log("^^^^^api")
    async function handleSubmit(e) {
        e.preventDefault()
        const d = {
    
            title: "a",
            description: "a",
            imgUrl: "a"
        }
        const response = await axios.post("https://api.vschool.io/johnfkennedy/thing", data)
        const dib = response.data
        console.log(api, dib)
        // setApi(prev => [...prev, dib]) //replace me daddy!
        console.log(api)
        // testy.setApi((prev) => prev.push(dib))
   
        // .catch(err => console.log(err))
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type = "text" placeholder = "image url goes here" name = "imgUrl" onChange={handleChange}/>
            <input type = "text" placeholder = "title goes here" name = "title" onChange={handleChange}/>
            <textarea type = "text" placeholder = "description goes here" name = "description" onChange={handleChange}></textarea>
            <button>microwave it!</button>
        </form>
    )
}