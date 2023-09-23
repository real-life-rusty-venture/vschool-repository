import LikeButton from "./LikeButton"
import CommentBox from "./CommentBox"
import React from "react"
import CommentList from "./CommentList"
import { UserContext } from "./context/userContextProvider"
export default function Show(props) {
    const { allComments } = React.useContext(UserContext)
    // console.log("allComments", allComments)
    // console.log("props", props)
    // console.log("props", props)
    // React.useEffect(() => {console.log("props", props)}, [])
    // console.log("anything??")
    // pull comments in from context
    // .filter to find the comments that match the show._id
    //matchyId = 
    //_id = 
    console.log("props._id  from show", props._id )
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <img src = {props.imgUrl}/>
                <p>{props.description}</p>
            </div>
            <LikeButton _id = {props._id}/>
            <CommentBox {...props}/>
            <CommentList user = {props.user} text = {props.text} showId = {props._id} 
            />
        </div>

    )
}