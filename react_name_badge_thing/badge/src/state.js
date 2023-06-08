import React, {useState} from "react";
import Carrd from "./carrd";
import DataMining from "./dataMining";
export default function Lego(props) {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        birth: "",
        email: "",
        phone: "",
        food: "",
        rambling: "",
        showIt: false
    })
    const [posty, setPosty] = useState({})
    return (
        <div>
            <DataMining data = {data} setData = {setData} setPosty = {setPosty} posty ={posty}/>
            <Carrd data = {data} setData = {setData} posty = {posty}/>
        </div>
    )
}