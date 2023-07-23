import React from "react"
import axios from "axios"
import { Context } from "react"
const Contextody = React.createContext()
function Contexty(props) {
    const [api, setApi] = React.useState([])
    const [data, setData] = React.useState({
        imgUrl: "",
        title: "",
        description: "",
    })
    function getter() {
        axios.get("https://api.vschool.io/johnfkennedy/thing").then(res => setApi(res.data))
    }
    React.useEffect(getter, [
        //data, deletey, edit form handleSubmita
    ])
    return (
        <Contextody.Provider value = {{
            api: api,
            setApi: setApi,
            data: data,
            setData: setData

        }}>
            {props.children}
        </Contextody.Provider>
    )
}
export {Contextody, Contexty}