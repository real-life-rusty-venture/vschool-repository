export default function Projects(props) {
    return (
        <div>
            <h2>projects!</h2>
            <img url = {props.img}></img>
            <h4>title! {props.title}</h4>
            <p>description! {props.description}</p>
            <h8>technologies!</h8>
            <p>{props.technologies}</p>
            <button>VIEW LIVE BITCH</button>
            <button>VIEW CODE MOTHERFUCKER</button>
        </div>
    )
}