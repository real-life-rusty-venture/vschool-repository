import ColorForm from "./f"
import Color from "./Color"
import React from "react"
import axios from "axios"
export default function Topper() {
    const [data, setData] = React.useState("")
    const [api, setApi] = React.useState([])
    const [color, setColor] = React.useState("")
    function fetcher() {
        // fetch("https://www.colr.org/json/colors/random/7")
        // .then(res => res.json())
        // .then(res => setApi(prev => (
        //     {
        //         ...prev, 
        //         res //why isnt this orange lol
        //     }
        // )))
        axios.get("https://www.colr.org/json/colors/random/7")
            .then(res => {
                const colors = res.data.colors
                setApi(colors.map(item => item.hex))
            })
        //idk how to access these colors mannnnn
    }
    React.useEffect(() => {
        fetcher()
    }, [])
    // fetcher() this will break my entire page
    return (
        <div>
            <ColorForm data={data} setData={setData} setColor = {setColor} api = {api} setApi = {setApi} color = {color}/>
            <Color data={data} setData={setData} api={api} setApi={setApi} color={color} setColor={setColor} />
        </div>
    )
}