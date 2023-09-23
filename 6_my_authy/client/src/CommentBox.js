import React, { useEffect } from "react";
import { UserContext } from "./context/userContextProvider";
import { useState } from "react";
export default function CommentBox(props) {
    // const [commentData, setCommentData] = React.useState({
    //     comment : "",
    //     user : ""
    // })
    const { addComment } = React.useContext(UserContext)
    // function handleChange(e) {
    //     setCommentData({
    //         [e.target.name] : e.target.value
    //     })
    // }
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     comment()

    // }


    // import React, { useState } from 'react'

    // const CommentForm = (props) => {
      const {_id} = props
      const initInputs = {
        text: "",
        show: _id,
        author: props.user
      }
      const [inputs, setInputs] = useState(initInputs)
    
      const handleChange = (e) => {
        // const {name, value} = e.target
        setInputs(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }))

        // console.log('handlechange inputs', e.target.name,  e.target.value, inputs,)
      }
    
      const handleSubmit = (e) => {
        //console.log("e", e)
        e.preventDefault()
        // console.log('handlesubmit', _id, inputs)
        addComment(_id, inputs)
        setInputs(initInputs)
      }
    
      const { text } = inputs

      return (
        <form onSubmit={handleSubmit}>
          <textarea  
            name="text" 
            value={text} 
            onChange={handleChange} 
            placeholder="text"
          />
          <button type = "submit">Add Comment</button>
        </form>
      )
    }
    
    // export default CommentForm




    // return (
    //     <div>
    //         <textarea placeholder = "your comment goes here!" name = "comment" ></textarea>
    //         <button onClick = {comment}>AAAAAAAAA</button>
    //     </div>
    // )
// }