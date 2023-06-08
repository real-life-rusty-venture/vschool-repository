import { friends } from "./data";
export default function Pets(props) {
    console.log(props)
    const example = "see how come THIS works but this function hates props"
    return (
        <div>
            <h2>these are the pets. whatever</h2>
            <p>{props.item.name}</p>
            <p>{props.item.breed}</p>
        </div>
    )
}
export const PetsMap = friends.map(item => {
    return (
        <div>
            <Pets item = {item}></Pets>
        </div>
    )
})