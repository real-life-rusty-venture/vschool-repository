
// import Card from "./ricking_morty";
import {data} from "./data";
const what = [{
    "something": "nothing"
}, {
    "something": "nothing"
}]
const Card = (props) => {
    console.log(props)
    return (
        <div>
            <h1>try {props.place}, man.</h1>
            <h1>or dont. i dont even care.</h1>
            <h1>but if youre going to be staying in this mcdonalds you need to have pants on sir</h1>
            <h1>{props.price}</h1>
            <h1>{props.timeToGo}</h1>
        </div>
    )
}
// export const List = (item) => {
//     return (
//         <>
//         {what.map(item => {
//             return (
//                 <div>a</div>
//             )
//         })}
//         {dataMap}
        
//         </>
//     )
// }
 export  const dataMap = data.map(item => {
        console.log(item.price)
        return (
            <div>
            {/* <h1>try {item.place} </h1>
            <h1>{item.price}</h1>
            <h1>{item.timeToGo}</h1> */}
                <Card
            place = {item.place}
            price = {item.price}
            timeToGo = {item.timeToGo}></Card>
            </div>
        )
    })