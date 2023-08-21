import React from "react";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import EditForm from "./EditForm"; 
import { ConnerText } from "./ContextHolder";
export default function Bounties(props) {
    const {formerData, dumberFlipper, editerFlipper} = React.useContext(ConnerText)
    const [formData, setFormData] = formerData
    const [dumbFlipper, setDumbFlipper] = dumberFlipper
    // const [editFlipper, setEditFlipper] = editerData
    const [editFlipper, setEditFlipper] = editerFlipper

    const [apiData, setApiData] = React.useState([])
    function getter() {
        const api = "/bounty"
        axios.get(api)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
    }
    React.useEffect(getter, [formData, dumbFlipper, editFlipper])
    const apiMap = apiData.map(item => {
        return (
            <div>
                <h1>what does marcellus wallace look like</h1>
                <h4>{item.firstName}</h4>
                <h4>{item.lastName}</h4>
                <h4>{item.living}</h4>
                <h4>{item.age}</h4>
                <h4>{item.gender}</h4>
                <DeleteButton id = {item._id}/>
                <EditForm id = {item._id} firstName = {item.firstName} lastName ={item.lastName} living = {item.living} age = {item.age} gender = {item.gender}/>
            </div>
        )
    })
    return (
        <div>
            {apiMap}
        </div>
    )
}