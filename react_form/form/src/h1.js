import App from "./App";
export default function H1(props) {
    console.log(props)
    console.log("^^^^thats the props")
    return (
        <h1>{props.data}</h1>
    )
}