import React, { useContext, useEffect } from "react"
import { UserContext } from "./context/userContextProvider"
import Show from "./Show"
import DeleteButton from "./DeleteButton"
import Edit from "./Edit"
export default function UserShowList(props) {
    const { show, getUserShows } = useContext(UserContext)

    const {shows} = props

    useEffect(() => {
        getUserShows()
        // console.log("useEffect working")
    }, 
    [])
    // console.log("show", show)
    const test = shows?.map(thisShow =>  {
            // console.log('thisShow', thisShow)
          return (
            <> 
            <h1>sea monkeys!</h1>
            <Show  {...thisShow} />
            <Edit/>
            <DeleteButton/>
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