import React from "react"
import { UserContext } from "./context/userContextProvider"
import Show from "./Show"
export default function ShowList(props) {
    const { allShows } = React.useContext(UserContext)
    return (
        <div>
            {allShows.map(show => {
                
                // console.log("show", show)
                //this doesnt console.log
                // console.log("show in allShowList", show)
                return(
                    <>
                        <Show {...show}/>
                        
                    </>
            
                )
            })}
        </div>
    )
}