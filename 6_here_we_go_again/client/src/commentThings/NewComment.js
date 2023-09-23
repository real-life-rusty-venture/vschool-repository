import React, { useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
export default function NewComment(props) {
    const initInputs = {
        text: "",
        show: props._id,
        author: props.user
      }
      const { addComment } = React.useContext(UserContext)
      const [inputs, setInputs] = React.useState(initInputs)
      const handleChange = (e) => {
        // const {name, value} = e.target
        setInputs(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }))

        // console.log('handlechange inputs', e.target.name,  e.target.value, inputs,)
      }
      function handleSubmit(e) {
        e.preventDefault()
        // console.log(inputs)
        console.log("props._id from comment", props._id)
        addComment(props._id, inputs)
        setInputs(initInputs)
      }
      return (
        <form onSubmit={handleSubmit}>
          <textarea  
            name="text" 
            // value={text} 
            onChange={handleChange} 
            placeholder="text"
          />
          <button type = "submit">Add Comment</button>
        </form>
      )
}