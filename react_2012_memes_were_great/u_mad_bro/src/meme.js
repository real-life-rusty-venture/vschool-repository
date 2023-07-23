import React, {useEffect} from "react"
import axios from "axios"
import MemesArray from "./MemesArray"
import ShowItButton from "./ShowItButton"
export default function Meme(props) {
    const [savedMemes, setSavedMemes] = React.useState([])
    const [meme, setMeme] = React.useState({
        "topText" : "",
        "bottomText" : "",
        "img" : "https://indianmemetemplates.com/wp-content/uploads/troll-face.jpg",
        "id" : ""
    })
    const [showIt, setShowIt] = React.useState(false)
    const [api, setApi] = React.useState({})
    function fetcher() {
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => {
            console.log(res.data.data.memes)
            setApi(res.data.data.memes)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {fetcher()}, [])
    function handleClick(e) {
        e.preventDefault()
        const vendata = api
        const randomIndex = Math.floor(Math.random() * vendata.length)
        setMeme(prev => {
            return {
                ...prev,
                "img" : vendata[randomIndex].url,
                "id" : vendata[randomIndex].id
            }
        })
        setSavedMemes(prev => ([
            ...prev,
            meme
        ]))
        console.log(meme, "meme lol")
        console.log(props.savedMemes, "savedMemes")
    }
    function handleChange(e) {
        setMeme(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const memeTextStyleTop = {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "15px 0",
    padding: "0 5px",
    fontFamily: "impact, sans-serif",
    fontSize: "3em",
    textTransform: "uppercase",
    color: "white",
    letterSpacing: "2px",
    paddingTop: "75px"
    }
    const memeTextStyleBottom = {
        position: "absolute",
    width: "80%",
    textAlign: "center",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "15px 0",
    padding: "0 5px",
    fontFamily: "impact, sans-serif",
    fontSize: "3em",
    textTransform: "uppercase",
    color: "white",
    letterSpacing: "2px",
    paddingTop: "525px"
    }
    const memeImageStyle = {
        maxWidth: "100%",
        borderRadius: "3px",
        height: "550px"
    }
    const myMemesList = savedMemes.map(meme=>
        <MemesArray
          id={meme.id}
          topText={meme.topText}
          bottomText={meme.bottomText}
          img={meme.img}
          showIt ={showIt}
          savedMemes = {savedMemes}
          setSavedMemes = {setSavedMemes}
          key = {meme.index}
        />)
        const [defaultMeme, setDefaultMeme] = React.useState("https://i.imgflip.com/1ur9b0.jpg")
        function defaultImage() {
            console.log("default firing capn") //this works
            setDefaultMeme(prev => {
                if (meme.img) {
                    return meme.img
                }
                else {
                    return prev
                }
            })
        }
        // "https://indianmemetemplates.com/wp-content/uploads/troll-face.jpg"
        React.useEffect(defaultImage, [])
    return (
        <div>
            <form className="form">
            <input placeholder = "top text here lol" className="input" name = "topText" onChange={handleChange}></input>
            <input placeholder="superior chad bottom text here" className="input" name = "bottomText" onChange={handleChange}></input>
            <button onClick = {handleClick} type = "button" className="button">get yer meme</button>
            <h2 style = {memeTextStyleTop}>{meme.topText}</h2>
            <h2 style = {memeTextStyleBottom}>{meme.bottomText}</h2>
            <img src = {meme.img} className="memeImage" style = {memeImageStyle}></img>
        </form>
        <ShowItButton showIt = {showIt} setShowIt = {setShowIt}/>
        {myMemesList}
        </div>
    )
}