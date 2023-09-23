import React from "react";
import { UserContext } from "../context/UserContextProvider";

export default function Edit(props) {
    const { edit, setEdit, editShow } = React.useContext(UserContext)
    function handleChange(e) {
        setEdit(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        editShow(props._id, edit)
    }
    return (
        <div>
            <form>
                <input name = "title" placeholder="new title" onChange = {handleChange}/>
                <input name = "description" placeholder="new description" onChange = {handleChange}/>
                <input name = "imgUrl" placeholder="new imgUrl" onChange = {handleChange}/>
                <button type = "button" onClick = {handleClick} >groovy baby!</button>
            </form>
        </div>
    )
}