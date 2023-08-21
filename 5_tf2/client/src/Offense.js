import React from "react"
import axios from "axios"
import Tf2Card from "./Tf2Card"
export default function Offense() {
    const [api, setApi] = React.useState([])
    function getter() {
        axios.get("/tf2/search/class?class=offense")
        .then(res => setApi(res.data))
        .catch(err => console.log(err))
    }
    React.useEffect(getter, [])
    const apiMap = api.map(item => {
        return (
            <Tf2Card alias = {item.alias} realName = {item.realName} age = {item.age} img = {item.img} gender = {item.gender} video = {item.video} funFacts = {item.funFacts}/>
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
            <h1>OFFENSE!</h1>
            {apiMap}
        </div>
    )
}