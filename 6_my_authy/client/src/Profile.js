import React from "react";
import { UserContext } from "./context/userContextProvider";
import ShowForm from "./ShowForm"
import UserShowList from "./UserShowList"
import { useEffect } from "react";
export default function Profile() {
    // console.log('in profile component')
    const {user, addShow, show, getUserShows} = React.useContext(UserContext)

    useEffect(() => { 
        getUserShows() 
    }, [])

    console.log("show", show)

    return (
        <div>
            <h2>hey {user.username}.</h2>
            <ShowForm addShow = {addShow}/>
            <h2>heres that stuff u made</h2>
            <UserShowList shows = {show}/>
        </div>
    )
}