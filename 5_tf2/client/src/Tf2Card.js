export default function Tf2Card(props) {
    console.log(props.img)
    console.log("^^^^^^^^^^props.img")
    const funFactsMap = props.funFacts.map(item => {
        return (
            <li>{item}</li>
        )
    })
    const divStyle = {
        marginBottom : "100px",
        border : "2px solid white",
        padding : "50px",
        textAlign : "center",
        backgroundColor : "#71afff"
    }
    const linkStyle = {
        color : "black"
    }
    const imageStyle = {
        height : "400px"
    }
    return (
        <div style = {divStyle}>
            <h3>{props.alias}</h3>
            <img src = {props.img} style = {imageStyle} />
            <p>real name: {props.realName}</p>
            <p>age: {props.age}</p>
            <p>gender: {props.gender}</p>
            <p>fun facts!</p>
            <ul>
                {funFactsMap}
            </ul>
            <a href = {props.video} style = {linkStyle}>click here to watch this mercs official introduction video!</a>
        </div>
    )
}