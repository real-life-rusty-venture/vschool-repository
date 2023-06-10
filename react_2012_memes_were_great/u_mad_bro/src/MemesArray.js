import React from "react";
//need user to be able to access memesArray (done)
//need user to be able to add edit and delete memes from memesArray (half done)
//need to fix styles (not done)
import EditForm from "./EditForm";
export default function MemesArray(props) {
    const [showEdit, setShowEdit] = React.useState(false)
    const [memeEdit, setMemeEdit] = React.useState({
        topText: "",
        bottomText: "",
        img: "" || props.img
    })
    const {savedMemes, setSavedMemes} = props
    function edit() {
        setShowEdit(prev => {
            if (prev === false) {
                return true
            }
            else {
                return false
            }
        }
            // prev === false ? "true" : "false"
            )
    }
    function bleach(id) {
        setSavedMemes(prev => prev.filter(item => item.id !== id))
    }
    function handleEditClick(e, id) {
        e.preventDefault()
        setSavedMemes(prev => prev.map( item => {
            console.log(item)
            console.log("^^^^^item")
            console.log(memeEdit)
            console.log("^^^^memeEdit")
            if(id === item.id) {
             return {...memeEdit}
            } else {
          return item
         }
         }))
         console.log(savedMemes)
         console.log("^^^^^this is savedMemes")
        // setSavedMemes(prev => prev.map( item => {
        //     item.id === id ? {...prev, memeEdit} : item
        // }
        //     [
        //     ...prev,
        //     {topText: memeEdit.topText,
        //         bottomText: memeEdit.bottomText
            // } this is extra
        // ]
        // ))
    }
    function handleChange(e, url) {
        setMemeEdit(prev => (
            {
                ...prev,
                [e.target.name] : e.target.value,
            //i gotta figure out how to pass url into here
            //when i pass item.img into the handlechange it breaks
            //it makes it unable to read target
            //for some reason
        }
        ))}
    // }}
    // function postIt() {
    //     axios.put("http://api.imgflip.com/caption_image", {memeEdit}).then(res => setCreatedMemes(prev => {return [...prev, {
    //                       url: res.data.url,
    //                       name: meme.name, //???????
    //                     //   uid: newId,
    //                     }]})
    //                     ) //i want to put a console.log here but i cant and i dont know why the code wont let me
    // } forget it
    // const MemesMap = savedMemes.map(item => {
        console.log(props.showIt, "props lol") //what
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
            // color: "pink",
            // top: "0"
            paddingTop: "25px",
            paddingRight: "650px",
            position: "absolute"
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
            // color: "pink",
            // bottom: "0"
            paddingTop: "450px",
            paddingRight: "650px",
            position: "absolute"
            }
            const memeImageStyle = {
                // maxWidth: "100%",
                borderRadius: "3px",
                height: "550px",
                width: "700px",
            }
        return props.showIt && ( //what
            <div>
                <h2 style = {memeTextStyleTop}>{props.topText}</h2>
                <h2 style = {memeTextStyleBottom}>{props.bottomText}</h2>
                <img style = {memeImageStyle} src = {props.img}/>
                <button onClick={() => edit(props.id)}>edit</button>
                <EditForm showEdit = {showEdit} img = {props.img} id = {props.id} handleChange = {props.handleChange} handleEditClick = {handleEditClick}/>
                <button onClick = {() => bleach(props.id)}>delete</button>
            </div>
        )
    //}
    //)
    // return (
    //     <div>
    //         {MemesMap}
    //     </div>
    // )
//}
// //http://api.imgflip.com/caption_image
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
       }