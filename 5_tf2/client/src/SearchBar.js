//never done anything like this before
//wish me luck WOOO
import React from "react";
import axios from "axios";
export default function SearchBar() {
    const [searchData, setSearchData] = React.useState("")
    function handleChange(e) {
        setSearchData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function handleClick() {
        const api = "/tf2/search"
        axios.post(api, searchData)
        .then(res => 
            console.log('inside handleclick', res.data),
            // setSearchData(defaultData)
            )
         
        .catch(err => console.log(err))
    }
    return (
        <form>
            <input type = {"search"} placeholder = "search for a single merc!" name = "searchData"/>
            <button type = "button">come on baby dont fear the reaper</button>
        </form>
    )
}