import React from "react"
export default function DataMining( {setData, data, setPosty, posty}) {
    const form = {
        border: "black",
        // marginLeft: "20px",
        // paddingRight: "100px",
        // marginTop: "45px",
        // marginBottom: "50px",
        textAlign: "center",
        margin: "100px"
        // display: "inline"
        // backgroundColor: "black"
    }
    const input = {
        // alignContent: "space-between"
        width: "400px",
        margin: "10px"

    }
    const button = {
        display: "block",
        marginLeft: "500px",
        marginTop: "10px"
    }
    const textArea = {
        height: "150px",
        textAlign: "center",
        width: "830px",
        margin: "20px"
    }
    //idk how to disable the submit button when some inputs are empty
    //i think maybe input.value will be truthy if something has been typed in
    //and vice versa
    //so like. maybe i just need some thing input.value && on the button
    //but id need it for each individual input i think
    //and idek how to grab these inputs
    //lol
    //idk how to write validation code either lol
    function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        const empty = {        firstName: "",
        lastName: "",
        birth: "",
        email: "",
        phone: "",
        food: "",
        rambling: "",
        showIt: true
}
        setPosty(data)
        console.log(posty, "this is posty")
        setData(empty)
        console.log(data, "this is data")
        //lines 51-54 are broken ig
        //posty is empty
        //data isnt cleared
    }
    return (
        <form onSubmit = {(e) => handleSubmit (e)}className="form" style = {form}>
            <input value = {data.firstName}required minLength = "3" type = "text" placeholder = "first name"  name = "firstName"  style = {input} onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))}/>
            <input required minLength = "3" type = "text" placeholder = "last name" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "lastName" style = {input}/>
            <input required minLength = "3" type = "email" placeholder = "email" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "email" style = {input}/>
            <input required minLength = "3" type = "text" placeholder = "place of birth" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "birth" style = {input}/>
            <input required minLength = "3" type = "tel" placeholder = "phone" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "phone" style = {input}/>
            <input required minLength = "3" type = "text" placeholder =  "food" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "food" style = {input}/>
            <textarea required minLength = "3" placeholder = "tell us about whatever man. nobody cares" onChange={(e) => setData(prev => ({...prev, [e.target.name]: e.target.value}))} name = "dumb" className="description" style = {textArea}/>
            <button style = {button}>make card lol</button>
        </form>
    )
}
