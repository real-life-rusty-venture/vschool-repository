import React from "react";
import { UserContext } from "./context/UserContextProvider";
import TvShowForm from "./TvShowForm"
import UserTvShows from "./UserTvShows"
import { useEffect } from "react";
export default function Profile() {
    // console.log('in profile component')
    const {user, addShow, show, getUserShows} = React.useContext(UserContext)

    useEffect(() => { 
        getUserShows() 
    }, [])

    const divStyle = {
        textAlign : "center",
        paddingTop : "80px",
        backgroundColor : "#373737",
        color : "#989789"
    }


    return (
        <div style = {divStyle}>
            <h2>hey {user.username}.</h2>
            <TvShowForm addShow = {addShow}/>
            <h2>heres that stuff u made</h2>
            <UserTvShows shows = {show}/>
        </div>
    )
}