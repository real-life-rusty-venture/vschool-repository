import React from "react"
import axios from "axios"
import Tf2Card from "./Tf2Card"
import {Route, Routes} from "react-router-dom"
export default function Defense() {
    const [api, setApi] = React.useState([])
    function getter() {
        axios.get("/tf2/search/class?class=defense")
        .then(res => setApi(res.data))
        .catch(err => console.log(err))
    }
    React.useEffect(() => getter(), [])
    const apiMap = api.map(item => {
        console.log(item)
        return (
            <div>
                    <Tf2Card alias = {item.alias} realName = {item.realName} age = {item.age} img = {item.img} gender = {item.gender} video = {item.video} funFacts = {item.funFacts}/>
            </div>
        )
    })
    const divStyle = {
        paddingLeft : "400px",
        paddingRight : "400px",
        textAlign : "center",
        backgroundColor : "#ff6868"
    }
    return (
        <div style = {divStyle}>
            <h1>DEFENSE!</h1>
            {apiMap}
        </div>
    )
}