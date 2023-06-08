// import Dice from "./diceable";
import React from "react"
function Dice(props) {
    const [cat, setCat] = React.useState([1, 2, 65, 401, 70])
    function rollin() {
    setCat([Math.floor(Math.random() *6 + 1), Math.floor(Math.random() *6 + 1), Math.floor(Math.random() *6 + 1), Math.floor(Math.random() *6 + 1), Math.floor(Math.random() *6 + 1)])
}
const catMap = cat.map(item => {
    return (
        <h1>{item}</h1>
    )
})
    return (
       <div>
            {catMap}
            <button type = "button" onClick={rollin}>ROLL IT</button>
       </div>
    )
}
export default function Appable() {
   return (
    <Dice></Dice>
   )
}
//clean and works :)