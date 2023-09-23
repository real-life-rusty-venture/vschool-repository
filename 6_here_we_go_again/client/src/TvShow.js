// import LikeButton from "./LikeButton"
// import CommentBox from "./CommentBox"
import React from "react"
// import CommentList from "./CommentList"
import Edit from "./editThings/Edit"
import NewComment from "./commentThings/NewComment"
import { UserContext } from "./context/UserContextProvider"
import LikeButton from "./editThings/LikeButton"
export default function TvShow(props) {
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
    console.log("props", props.upVote.length)
    const upVotesLength = props.upVote.length
    const imageStyle = {
        width : "200px"
    }
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <img src = {props.imgUrl} style = {imageStyle}/>
                <p>{props.description}</p>
            </div>
            {/* <LikeButton _id = {props._id}/>
            <CommentBox {...props}/>
            <CommentList user = {props.user} text = {props.text} showId = {props._id}  */}
            {/* /> */}
            <NewComment {...props} />
            <LikeButton _id = {props._id} upVotesLength = {upVotesLength} />
            {/* <Edit/> */}
        </div>

    )
}