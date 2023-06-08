import React, {useEffect} from "react"
import data from "./data"
import axios from "axios"
import ShowItButton from "./ShowItButton"
export default function Meme(props) {
    const [meme, setMeme] = React.useState({
        "topText" : "top text",
        "bottomText" : "bottom text",
        "img" : "",
        "id" : ""
    })
    // const [savedMemes, props.setSavedMemes] = React.useState([])
    const [showIt, setShowIt] = React.useState(false)
    const [api, setApi] = React.useState({})
    function fetcher() {
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json)
        // .then(res => { //why is this green make this not green
        //     console.log(res, "this is res")
        //     setApi(res.data.memes)
        // })
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => {
            console.log(res.data.data.memes)
            setApi(res.data.data.memes)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {fetcher()}, [])
    //http://api.imgflip.com/caption_image
    //this begins here
// axios.post("/http://api.imgflip.com/caption_image")
// .then(
    
// )
// formData.append('template_id', memeText.template_id)
//     formData.append('username', ‘username’)
//     formData.append('password', ‘password’)
//     formData.append('text0', memeText.text0)
//     formData.append('text1', memeText.text1)
//     async function postMeme() {
//         const formData = new FormData();
//         formData.append('template_id', memeText.template_id)
//         formData.append('username', 'swright987')
//         formData.append('password', 'Kk$-ahLtX2')
//         formData.append('text0', memeText.text0)
//         formData.append('text1', memeText.text1)
//         //formData.append('boxes', memeText.boxes)
    
//         const res = await fetch(`https://api.imgflip.com/caption_image`, {
//           method: 'POST',
//           headers: {'Accept': '/'},
//           mode: 'cors',
//           body: formData,
//         })
//         .then(response => response.text())
//         .then(result => {
//           console.log('result', JSON.parse(result))
//           var created = JSON.parse(result)
//           // If post successful, add meme to list and set as current meme
//           if (created.success){
//             var newId = uuidv4()
//             setCreatedMemes(prevData => {return[...prevData, {
//               url: created.data.url,
//               name: meme.name,
//               uid: newId,
//             }]})
//             setCurrentMeme(created.data.url)
//           }
//         })
//         .catch(error => console.log('error', error));
//       }
//       //this ends here
    function handleClick() {
        // console.log(api)
        const vendata = api
        const randomIndex = Math.floor(Math.random() * vendata.length)
        setMeme(prev => {
            return {
                ...prev,
                "img" : vendata[randomIndex].url,
                "id" : vendata[randomIndex].id
            }
        })
        props.setSavedMemes(prev => ([
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
    const toppy = {
        color: "black",
        // display: "inline", 
        // paddingLeft: "400px",
        // paddingTop: "400px"
        position: "absolute", 
        textAlign: "center"
    }
    const bottom = {
        color: "black", 
        // display: "inline",
        // paddingLeft: "400px",
        // paddingTop: "600px"
        position: "absolute", 
        textAlign: "center"
    }
    //finish this later
    return (
        <form className="form">
            <input placeholder = "top text here lol" className="input" name = "topText" onChange={handleChange}></input>
            <input placeholder="superior chad bottom text here" className="input" name = "bottomText" onChange={handleChange}></input>
            <button type = "button" className="button" onClick={handleClick}>get yer meme</button>
            <h2>{meme.topText}</h2>
            <h2>{meme.bottomText}</h2>
            <img src = {meme.img} className="memeImage"></img>
        </form>
    )
}