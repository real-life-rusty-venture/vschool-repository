// import React from "react";

// export default function Public(props) {
//     console.log('in Public component')

//     return (
//         <div>
//             <h1>this is the public page!</h1>
//             <h4>its pretty much empty right now tho</h4>
//         </div>
//     )
// }


import React from "react";
import { UserContext } from "./context/userContextProvider";
import ShowForm from "./ShowForm"
import ShowList from "./UserShowList"
import { useEffect } from "react";
import AllShowList from "./AllshowList"
export default function Public() {
    // console.log('in profile component')
    const {user, addShow, show, getAllShows, allShows} = React.useContext(UserContext)
    useEffect(() => { getAllShows() }, [])
    return (
        <div>
            <h1>public page for public posts</h1>
            <AllShowList shows = {allShows}/>
        </div>
    )
}