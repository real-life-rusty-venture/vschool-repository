import React from "react";
import { UserContext } from "./context/userContextProvider";
import Comment from "./Comment";
export default function CommentList(props) {
    console.log("commentList is firing")
    const {showId} = props
    const { allComments, getComments } = React.useContext(UserContext)
    React.useEffect(() => {getComments()}, [])
    // console.log('allComments:', allComments)
    // console.log("showid from commentList", showId)
    // const commentMap = allComments?.map(item => {
    //     console.log("item._id", item._id)
    //     //why isnt item._id showing
    //     console.log("showId", showId)
    //     if (item._id  == showId) {
    //         console.log("if statement rang true in comment map")
    //         // // return item
    //         return(
    //             <div>
    //                 <Comment user = {item.user} text = {item.text} 
    //                 // showId = {item._id}
    //                 />
    //             </div>
    //         )
    //     }
    // })
    const allCommentsFilter = allComments.filter(item => {
        console.log("showId", showId)
        if (item._id) {
            //^^^its this line i just know it
            return (
                <div>
                    <Comment user = {item.user} text = {item.text} _id = {item._id}/>
                </div>
            )
        }
    })
    return (
        <div>
            {allCommentsFilter}
        </div>
    )
}