import axios from "axios"
import React from "react"
import EditForm from "./EditForm"
import {Contextody} from "./Contexty"
export default function Ugly(props){
    const [showReddit, setShowReddit] = React.useState(false)
    const smurder = React.useContext(Contextody)
    console.log(smurder)
    const api = smurder.api
    // function deletey(id) {
    //     console.log("deletey firing")
    //     console.log(id)
    //     console.log("^^^^deletey id")
    //     axios.delete(`https://api.vschool.io/johnfkennedy/thing/${id}`).then( res => {
    //         console.log("its been deleted idjit")
    //         console.log(res)
    //         console.log("^^^^^^deletey res lol")
    //         axios.get("https://api.vschool.io/johnfkennedy/thing").then(res => smurder.setApi(res))
    //         //i need to re get the api data
    //         //dont know how exactly
    //         //doesnt like the line above
    //         //says api.map is not a function
    //         //cuz im doing this inside the api map ig
    //         //i think i need to stick it in a useEffect
    //         //that changes any time.....data changes? but also edit or delete functions change?
    // }
    //     )
    // }
    //this will not work
    //still gets the "api.map is not a function" error
    //cuz im calling this function in the api.map function ig
    //well it was worth a shot!
    const apiMap = api.map(item => {
        function deletey(id) {
            console.log("deletey firing capn")
            console.log(id)
            console.log("^^^^deletey id")
            axios.delete(`https://api.vschool.io/johnfkennedy/thing/${id}`).then( res => {
                console.log("its been deleted idjit")
                console.log(res)
                console.log("^^^^^^deletey res lol")
                // axios.get("https://api.vschool.io/johnfkennedy/thing") //replace me!
                // .then(res => smurder.setApi(res))
                //i need to re get the api data
                //dont know how exactly
                //doesnt like the line above
                //says api.map is not a function
                //cuz im doing this inside the api map ig
                //i think i need to stick it in a useEffect
                //that changes any time.....data changes? but also edit or delete functions change?
        }
            )
        }
        function showEdit() {
            setShowReddit(prev => !prev)
        }
        return (
            <div>
                <img src = {item.url}/>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button onClick = {showEdit}>edit</button>
                <EditForm showReddit = {showReddit} api = {api} id = {item._id}/>
                <button onClick = {() => deletey(item._id)}>delete</button>
            </div>
        )
    })
    return apiMap
}