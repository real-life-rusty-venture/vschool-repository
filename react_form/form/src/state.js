import React from "react"
import Form from "./form"
import NameList from "./map"
export default function FinalBossComponent() {
    const [data, setData] = React.useState([])
    console.log(data, "this is data lol")
    return (
        <div>
            <Form data = {data} setData = {setData}/>
            <NameList data = {data}/>
        </div>
    )
}