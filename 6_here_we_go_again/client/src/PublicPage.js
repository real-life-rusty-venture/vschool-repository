import React from "react";
import { UserContext } from "./context/UserContextProvider";
import TvShowForm from "./TvShowForm"
// import UserTvShowList from "./UserTvShowList"
import { useEffect } from "react";
import AllTvShows from "./AllTvShows"
export default function Public() {
    const divStyle = {
        textAlign : "center",
        paddingTop : "80px",
        backgroundColor : "#373737",
        color : "#989789"
    }

    // console.log('in profile component')
    const {user, addShow, show, getAllShows, allShows} = React.useContext(UserContext)
    useEffect(() => { getAllShows() }, [])
    return (
        <div style = {divStyle}>
            <h1>public page for public posts</h1>
            <AllTvShows shows = {allShows}/>
        </div>
    )
}