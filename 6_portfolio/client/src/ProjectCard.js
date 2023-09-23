export default function ProjectCard(props) {
    return (
        <div>
            <img src = {props.img}></img>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
            <a href = {props.viewLive}>VIEW LIVE</a>
            <a href = {props.viewCode}>VIEW CODE</a>
        </div>
    )
}