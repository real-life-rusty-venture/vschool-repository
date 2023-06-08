import React from "react";
//need user to be able to access memesArray (done)
//need user to be able to add edit and delete memes from memesArray (half done)
//need to fix styles (not done)
export default function MemesArray(props) {
    const [memeEdit, setMemeEdit] = React.useState({
        topText: "",
        bottomText: "",
        img: ""
    })
    const {savedMemes, setSavedMemes} = props
    function edit() {
        props.setShowEdit(prev => prev === false ? "true" : "false")
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
             }
        // ]
        // ))
    }
    function handleChange(e, url) {
        setMemeEdit(
            {[e.target.name] : e.target.value,
            img: ""//i gotta figure out how to pass url into here
            //when i pass item.img into the handlechange it breaks
            //it makes it unable to read target
            //for some reason
        }
        )
    // }
    // function postIt() {
    //     axios.put("http://api.imgflip.com/caption_image", {memeEdit}).then(res => setCreatedMemes(prev => {return [...prev, {
    //                       url: res.data.url,
    //                       name: meme.name, //???????
    //                     //   uid: newId,
    //                     }]})
    //                     ) //i want to put a console.log here but i cant and i dont know why the code wont let me
    // } forget it
    const [showEdit, setShowEdit] = React.useState(false)
    const MemesMap = savedMemes.map(item => { //what
        console.log(props.showIt, "props lol") //what
        return props.showIt && ( //what
            <div>
                <h2>{item.topText}</h2>
                <h2>{item.bottomText}</h2>
                <img src = {item.img}/>
                <button onClick={() => edit(item.id)}>edit</button>
                showEdit && <form onSubmit = {(e) => handleEditClick(e, item.id)}>
                    <input name = "topText" placeholder = "top text goes here lol" onChange={(e) => handleChange(e, item.img)}/>
                    <input name = "bottomText" placeholder="bottom text goes here lol" onChange={() => handleChange}/>
                    {/* <input name = "img" placeholder = "src url goes here lol"/> */}
                    <button>submitty</button>
                </form>
                <button onClick = {() => bleach(item.id)}>delete</button>
            </div>
        )
    })
    return (
        <div>
            {MemesMap}
        </div>
    )
}
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
//       }