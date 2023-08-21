import React from "react"
import axios from "axios"
import EditForm from "./EditForm"
import DeleteButton from "./DeleteButton"
import { ConnerText } from "./ContextHolder"
export default function UglyThings() {
    const {ugly, uglyEdit, uselessDeleteState} = React.useContext(ConnerText)
    const [uglier, setUglier] = ugly
    const [uglierEdit, setUglierEdit] = uglyEdit
    const [deleteState, setDeleteState] = uselessDeleteState
    const [apiData, setApiData] =  React.useState([])
    function getter() {
        const api = "https://api.vschool.io/postaldude/thing"
        axios.get(api)
        .then(res => {
            console.log("the gets been gotten sire")
            setApiData(res.data)
        })
    }
        React.useEffect(getter, [uglier, uglierEdit, deleteState])
        const apiMap = apiData.map(item => {
            return (
                <div>
                    <img src = {item.imgUrl} width = "200px"></img>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <EditForm id = {item._id}/>
                    <DeleteButton id = {item._id}/>
                </div>
            )
        })
        return (
            <div>
                {apiMap}
            </div>
        )
}