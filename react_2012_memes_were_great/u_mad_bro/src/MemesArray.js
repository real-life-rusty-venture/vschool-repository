import React from "react";
import EditForm from "./EditForm";
export default function MemesArray(props) {
    const [showEdit, setShowEdit] = React.useState(false)
    const [memeEdit, setMemeEdit] = React.useState({
        topText: "",
        bottomText: "",
        img: "" || props.img
    })
    const {savedMemes, setSavedMemes} = props
    function edit() {
        setShowEdit(prev => {
            if (prev === false) {
                return true
            }
            else {
                return false
            }
        }
            )
    }
    function bleach(id) {
        setSavedMemes(prev => prev.filter(item => item.id !== id))
    }
    function handleEditClick(e, id) {
        e.preventDefault()
        setSavedMemes(prev => prev.map( item => {
            console.log(item)
            console.log("^^^^^item")
            console.log(memeEdit)
            console.log("^^^^memeEdit")
            if(id === item.id) {
             return {...memeEdit}
            } else {
          return item
         }
         }))
         console.log(savedMemes)
         console.log("^^^^^this is savedMemes")
         setShowEdit(!showEdit)
    }
    function handleChange(e) {
        //url
        setMemeEdit(prev => (
            {
                ...prev,
                [e.target.name] : e.target.value,
        }
        ))}
        console.log(props.showIt, "props lol") //what
        const memeTextStyleTop = {
            position: "absolute",
            width: "80%",
            textAlign: "center",
            left: "50%",
            transform: "translateX(-50%)",
            margin: "15px 0",
            padding: "0 5px",
            fontFamily: "impact, sans-serif",
            fontSize: "3em",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "2px",
            paddingTop: "25px",
            paddingRight: "650px",
            position: "absolute"
            }
            const memeTextStyleBottom = {
                position: "absolute",
            width: "80%",
            textAlign: "center",
            left: "50%",
            transform: "translateX(-50%)",
            margin: "15px 0",
            padding: "0 5px",
            fontFamily: "impact, sans-serif",
            fontSize: "3em",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "2px",
            paddingTop: "450px",
            paddingRight: "650px",
            position: "absolute"
            }
            const memeImageStyle = {
                borderRadius: "3px",
                height: "550px",
                width: "700px",
            }
        return props.showIt && (
            <div>
                <h2 style = {memeTextStyleTop}>{props.topText}</h2>
                <h2 style = {memeTextStyleBottom}>{props.bottomText}</h2>
                <img style = {memeImageStyle} src = {props.img}/>
                <button onClick={() => edit(props.id)}>edit</button>
                <EditForm showEdit = {showEdit} img = {props.img} id = {props.id} handleChange = {handleChange} handleEditClick = {handleEditClick}/>
                <button onClick = {() => bleach(props.id)}>delete</button>
            </div>
        )
       }