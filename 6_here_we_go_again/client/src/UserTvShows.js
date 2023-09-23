import React, { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContextProvider"
// import Show from "./Show"
import TvShow from "./TvShow"
import DeleteButton from "./editThings/DeleteButton"
// import Edit from "./Edit"
import Edit from "./editThings/Edit"
import LikeButton from "./editThings/LikeButton"
export default function UserTvShowList(props) {
    const { show, getUserShows } = useContext(UserContext)

    const {shows} = props

    useEffect(() => {
        getUserShows()
        // console.log("useEffect working")
    }, [])
    // console.log("show", show)
    const test = shows?.map(thisShow =>  {
            // console.log('thisShow', thisShow)
          return (
            <> 
            <TvShow  {...thisShow} />
             <Edit _id = {thisShow._id}/>
             <DeleteButton _id = {thisShow._id}/> 
            </>
          )
     } )
    


    return (
        <div>
            {test}
        </div>
    )
    // return (
    //     <div>
    //         <Show {...show}/>
    //     </div>
    // )
}
//idk how to put more than one thing where line 8 is
//{ $addToSet: { upVote: req.auth._id }, 
//$pull: { downVote: req.auth._id } }