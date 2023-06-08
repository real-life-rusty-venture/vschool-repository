import { friends } from "./data";
import Pets from "./pets";
export default function Friends(props) {
    const petList = friends.map(item => {
        item.pets.map(item => {
            return (
                <Pets item = {item}/>
            )
        })
    })
    return (
        <div>
            <h1>FINE ill show you another one of your friends. fine. would it kill  you to say please?</h1>
            <p>{props.item.name}</p>
            <p>{props.item.age}</p>
            {props.item.pets.map(item => {
                return (
                    <Pets item = {item}/>
                )
            })}
        </div>
    )
}
export const FriendsMap = friends.map(item => {
    return (
        <div>
            <Friends item = {item}></Friends>
        </div>
    )})