import React from "react";
import Header from "./Header";
import Meme from "./meme";
import ShowItButton from "./ShowItButton";
import MemesArray from "./MemesArray";
export default function FinalBossComponent() {
    const [showIt, setShowIt] = React.useState(false)
    const [savedMemes, setSavedMemes] = React.useState([])
    return (
        <div>
            <Header></Header>
            <Meme savedMemes = {savedMemes} setSavedMemes = {setSavedMemes}></Meme>
            <ShowItButton setShowIt = {setShowIt}/>
            <MemesArray savedMemes = {savedMemes} setSavedMemes = {setSavedMemes} showIt = {showIt}/>
        </div>
    )
}