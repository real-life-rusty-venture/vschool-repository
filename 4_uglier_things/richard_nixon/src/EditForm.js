import  React from "react"
import axios from "axios"
import { ConnerText } from "./ContextHolder"
export default function EditForm(props) {
    // const [uglyEdit, setUglyEdit] = React.useState({
    //     title: "",
    //     description: "",
    //     imgUrl: ""
    // })
    const {uglyEdit} = React.useContext(ConnerText)
    const [uglierEdit, setUglierEdit] = uglyEdit
    function handleChange(e) {
        setUglierEdit(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick(e) {
        e.preventDefault()
        const api = `https://api.vschool.io/postaldude/thing/${props.id}`
        console.log(api)
        axios.put(api, uglierEdit)
        .then(() => {
            console.log("putty putted")
            setUglierEdit({
                title : "",
                description : "",
                imgUrl : ""
            })
        }
        )
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form>
                <input placeholder = "new title" name = "title"  onChange = {handleChange}/>
                <input placeholder = "new description" name = "description"  onChange = {handleChange}/>
                <input placeholder = "new imgUrl" name = "imgUrl"  onChange = {handleChange}/>
                <button onClick = {handleClick} type = "button">change it</button>
            </form>
        </div>
    )
}