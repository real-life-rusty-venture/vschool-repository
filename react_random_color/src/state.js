import ColorForm from "./f"
import Color from "./Color"
import React from "react"
import axios from "axios"
export default function Topper() {
    const [data, setData] = React.useState("")
    const [api, setApi] = React.useState([])
    const [color, setColor] = React.useState("")
    function fetcher() {
        axios.get("https://www.colr.org/json/colors/random/7")
            .then(res => {
                const colors = res.data.colors
                setApi(colors.map(item => item.hex))
            })
    }
    React.useEffect(() => {
        fetcher()
    }, [])
    return (
        <div>
            <ColorForm data={data} setData={setData} setColor = {setColor} api = {api} setApi = {setApi} color = {color}/>
            <Color data={data} setData={setData} api={api} setApi={setApi} color={color} setColor={setColor} />
        </div>
    )
}