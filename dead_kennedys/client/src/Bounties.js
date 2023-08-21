import React from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import EditForm from "./EditForm"; 
import { ConnerText } from "./ContextHolder";
export default function Bounties(props) {
    const {formerData, dumberFlipper, editerData} = React.useContext(ConnerText)
    const [formData, setFormData] = formerData
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    const [editForm, setEditData] = editerData

    const [apiData, setApiData] = React.useState([])
    function getter() {
        // console.log("gets been gotten")
        const api = "/app"
        axios.get('/bounty') //code angry here
        .then(res => {
            setApiData(res.data)
            // console.log(res.data)
        // console.log("api wokred")
    })
        .catch(err => console.log(err))
    }
    React.useEffect(getter, [formData, dumbFlipper, editForm])
    const apiMap = apiData.map(item => {
        // console.log(item)
        return (
            <div>
                <h1>what does marcellus wallace look like</h1>
                <h4>{item.firstName}</h4>
                <h4>{item.lastName}</h4>
                {item.living ? <h4>living</h4> : <h4>dead</h4>}
                <h4>{item.age}</h4>
                <h4>{item.gender}</h4>
                <DeleteButton id = {item.id}/>
                <EditForm id = {item.id}/>
            </div>
        )
    })
    return (
        <div>
            {apiMap}
        </div>
    )
}