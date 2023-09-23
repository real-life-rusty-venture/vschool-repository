// import React from "react";
// import axios from "axios";
// // const UserContext = React.createContext()

// // function UserContextProvider(props) {
// //     const userToken = {user : JSON.parse(localStorage.getItem("user")) || {}, token : localStorage.getItem("token") || "", show : localStorage.getItem("show") || []}
// //     const [userData, setUserData] = React.useState(UserContext)
// //     const axolotl = axios.create()
// //     axolotl.interceptors.request.use(config => {
// //         const token = localStorage.getItem("token")
// //         config.headers.Authorization = `Bearer : ${token}`
// //     })
// //     function signup(credentials) {
// //         axios.post("/auth/signup", credentials)
// //         .then(res => 
// //             {
// //                 localStorage.setItem("token", token)
// //                 localStorage.setItem("user", JSON.stringify(user))

// //                 const { user, token } = res.data
// //                 setUserData(prev => ({
// //                     ...prev,
// //                     user,
// //                     token
// //                 }))

// //             })
// //         .catch(err => console.log(err))
// //     }
// //     function login(credentials) {
// //         axios.post("/auth/login", credentials)
// //         .then(res => {
// //             localStorage.setItem("token", token)
// //             localStorage.setItem("user", JSON.stringify(user))
// //             getUserShow()
// //             setUserData(prev => ({
// //                 ...prev,
// //                 user,
// //                 token
// //             }))

// //         })
// //         .catch(err => console.log(err))
// //     }
// //     function logout() {
// //         localStorage.removeItem("token")
// //         localStorage.removeItem("user")
// //         setUserData(userToken)
// //     }
// //     function addShow(newShow) {
// //         axolotl.post("/api/tv", newShow)
// //         .then(res => {
// //             setUserData(prev => ({
// //                 ...prev,
// //                 show : [...prev.show, res.data]
// //             }))
// //         })
// //         .catch(err => console.log(err.response.data.errMsg))
// //     }
// //     function getUserShow() {
// //         axolotl.get("/api/tv")
// //         .then(res => console.log(res))
// //         .catch(err => console.log(err.response.data.errMsg))
// //     }
// //     return  (
// //         <UserContext.Provider
// //         value = {{
// //             ...userData,
// //             signup,
// //             login,
// //             logout,
// //             addShow
// //         }}
// //         >
// //             {props.children}
// //         </UserContext.Provider>
// //     )
// // }
// // export { UserContext , UserContextProvider }
// const UserContext = React.createContext()
// function UserContextProvider(props) {
//     const userToken = {user : JSON.parse(localStorage.getItem("user")) || {}, token : localStorage.getItem("token") || "", show : localStorage.getItem("show") || []}
//     const initState = {
//         user: JSON.parse(localStorage.getItem("user")) || {}, 
//         token: localStorage.getItem("token") || "", 
//         errMsg: ""
//     }
//     const { user } = initState
//     const { token } = initState
//     const { show } = initState
//     const [userData, setUserData] = React.useState(initState)
//     const axolotl = axios.create()
//     axolotl.interceptors.request.use(config => {
//         const token = localStorage.getItem("token")
//         config.headers.Authorization = `Bearer : ${token}`
//     })
//     // function signup(credentials) {
//     //     axios.post("/auth/signup", credentials)
//     //     .then(res => 
//     //         {
//     //             localStorage.setItem("token", token)
//     //             localStorage.setItem("user", JSON.stringify(user))

//     //             const { user, token } = res.data
//     //             setUserData(prev => ({
//     //                 ...prev,
//     //                 user,
//     //                 token
//     //             }))

//     //         })
//     //     .catch(err => console.log(err))
//     // }


//     function signup(credentials){
//     axios.post("/auth/signup", credentials)
//       .then(res => {
//         const { user, token } = res.data
//         localStorage.setItem("token", token)
//         localStorage.setItem("user", JSON.stringify(user))
//         setUserData(prev => ({
//           ...prev,
//           user,
//           token
//         }))
//       })
//       .catch(err => console.log(err))
//   }




//     function login(credentials) {
//         axios.post("/auth/login", credentials)
//         .then(res => {
//             const { user, token } = res.data
//             localStorage.setItem("token", token)
//             localStorage.setItem("user", JSON.stringify(user))
//             getUserShow()
//             setUserData(prev => ({
//                 ...prev,
//                 user,
//                 token
//             }))

//         })
//         .catch(err => console.log(err))
//     }
//     function logout() {
//         localStorage.removeItem("token")
//         localStorage.removeItem("user")
//         setUserData(userToken)
//     }
//     function addShow(newShow) {
//         axolotl.post("/api/tv", newShow)
//         .then(res => {
//             setUserData(prev => ({
//                 ...prev,
//                 show : [...prev.show, res.data]
//             }))
//         })
//         .catch(err => console.log(err.response.data.errMsg))
//     }
//     function getUserShow() {
//         axolotl.get("/api/tv")
//         .then(res => console.log(res))
//         .catch(err => console.log(err.response.data.errMsg))
//     }
//     return (
//         <UserContext.Provider
//         value = {{
//             ...userData,
//             signup,
//             login,
//             logout,
//             addShow
//         }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }





import React, { useState } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})


function UserContextProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    show: [] 
  }
  
  const [allShows, setAllShows] = React.useState([])
  const [userState, setUserState] = useState(initState)
  const [editFlipper, setEditFlipper] = React.useState(false)
  const [edit, setEdit] = React.useState({
    title : "",
    description : "",
    imgUrl : ""
  })

const [allComments, setAllComments] = React.useState([])




  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        // console.log('signup', res.data)
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prev => ({
          ...prev,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function login(credentials){
    // console.log('inside login context func', credentials)
    axios.post("/auth/login", credentials)
      
      .then(res => {
        const { user, token } = res.data
        // console.log('login', res.data)
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserShows()
        setUserState(prev => ({
          ...prev,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function logout(){
    // console.log("postal dude")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      show: []
    })
  }

  function getUserShows(){
    userAxios.get("/api/tv/user")
      .then(res => {
        console.log("userShow data:", res.data)
        setUserState(prev => ({
          ...prev,
          show: res.data
        }))
      })
      .catch(err => console.log(err))
  }

function getAllShows() {
  userAxios.get("/api/tv")
  .then(res => {
    // console.log('allShows Data:', res.data)
    setAllShows(res.data)
  })
  .catch(err => console.log(err))
}



  function addShow(newShow){
    // console.log("newShow", newShow)
    userAxios.post("/api/tv", newShow)
      .then(res => {
        setUserState(prev => ({
          ...prev,
          show: [...prev.show, res.data]
        }))
      })
      .catch(err => console.log(err))
  }

  // function editShow( _id, edit) {
  //   // console.log("well at least the edit show is firing") 
  //   //^^^this fires
  //       const api = `api/tv/${_id}`
  //       userAxios.put(api, edit)
  //       .then(() => {
  //         console.log("yippee im the userAxios and i did the thing correctly!")
  //           setEdit({
  //               title : "",
  //               description : "",
  //               imgUrl : ""
  //           })
  //           getUserShows()
  //           getAllShows()
  //       }
  //       )
  //       .catch(err => console.log(err))
  // }



  function editShow(_id, edit) {
    const api = `api/tv/${props.id}`
    // console.log("^^^^^^^^editData")
    axios.put(api, edit)
    .then(res => 
        {
          setEdit({
            title : "",
            description : "",
            imgUrl : ""
        })
        getUserShows()
        getAllShows()
        // setEditData(defaultEdit)
        // setEditFlipper(prev => !prev)
    }
        // console.log("testy")
        //okay so if i leave this empty then my edit function will work as it should
        //it just wont refresh on its own
        //ifi put something, seemingly anything in here,
        //i get an internal server error
        )
    .catch(err => console.log(err))
}








  function deleteButton(e, _id) {
    e.preventDefault()
    userAxios.delete(`api/tv/${_id}`)
    .then(res => {
      console.log(`successfully deleted ${res.title}`)
      getUserShows()
      getAllShows()
    })
  }


  function like( _id) {
    // e.preventDefault()
    userAxios.put(`api/tv/like/:${_id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }




function addComment( _id, newComment) {
  userAxios.post(`api/comment/${_id}`, newComment)
  .then(res  => {
    // getUserShow()
    // getAllShows()
    console.log('user context comment res', res)
    getComments()
  })

}


function getComments() {
  userAxios.get(`api/comment/`)
 .then((res) => {
  console.log('inside getComments context', res.data)
      setAllComments(res.data)
      console.log("allComments in UserContext", allComments)
 })
}



// React.useEffect(getComments(), [])
//this breaks my code
//says create is not a function




  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addShow,
        getUserShows,
        getAllShows,
        allShows,
        edit,
        setEdit,
        editShow,
        editFlipper,
        setEditFlipper,
        deleteButton,
        like,
        addComment,
        allComments,
        getComments
      }}>
      { props.children }
    </UserContext.Provider>
  )
}








export { UserContext, UserContextProvider }