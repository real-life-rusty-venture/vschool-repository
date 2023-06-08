export default function BlogPost(props){
    return (
        <div className="quotes">
            <div className = "titleDiv">
                <h1 className="setup">{props.item.title}</h1>
                <h2 className="punchline">{props.item.subTitle}</h2>
            </div>
            <div className="subtitleDiv">
            <p className="posted">posted by <p className="author">{props.item.author}</p> on <p className="p">{props.item.date}</p></p>
            </div>
        </div>
    )
}