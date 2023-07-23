import ArtCard from "./ArtCard";
import React from "react";
import axios from "axios"
import {ConnerText} from './ContextHolder'
export default function Depression() {
    const {divValue} = React.useContext(ConnerText)
    const [diverValue, setDiverValue] = divValue
    // const apiMap = api.map(item => {
    //     return (
    //         <ArtCard imgUrl = {item.imgUrl} title = {item.title} description = {item.description}/>
    //     )
    // })
    const [api, setApi] = React.useState([])
    function getter() {
        axios.get("https://api.vschool.io/depression/thing")
        .then(res => {
            setApi(res.data)
            // apiMap = api.map(item => {
            //     return (
            //         <ArtCard imgUrl = {item.imgUrl} title = {item.title} description = {item.description}/>
            //     )
            // })
        })
        .catch(err => console.log(err))
    }
    React.useEffect(getter, [])
    // const apiMap = api.map(item => {
        //     return (
            const apiMap = api.map(item => {
                return (
                    <ArtCard imgUrl = {item.imgUrl} title = {item.title} description = {item.description}/>
                )
            })
            //         <ArtCard imgUrl = {item.imgUrl} title = {item.title} description = {item.description}/>
    //     )
    // })
    return apiMap && (
        <div style = {diverValue}>
            {apiMap}
        </div>
    )
}