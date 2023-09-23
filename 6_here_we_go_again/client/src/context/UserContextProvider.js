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

  function editShow( _id, edit) {
    // console.log("well at least the edit show is firing") 
    //^^^this fires
        const api = `api/tv/${_id}`
        userAxios.put(api, edit)
        .then(() => {
          console.log("yippee im the userAxios and i did the thing correctly!")
            setEdit({
                title : "",
                description : "",
                imgUrl : ""
            })
            getUserShows()
            getAllShows()
        }
        )
        .catch(err => console.log(err))
  }



  function editShow(_id, edit) {
    const api = `api/tv/${_id}`
    // console.log("^^^^^^^^editData")
    userAxios.put(api, edit)
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








  function deleteButton(_id) {
    // e.preventDefault()
    userAxios.delete(`api/tv/${_id}`)
    .then(res => {
      console.log(`successfully deleted ${res.title}`)
      getUserShows()
      getAllShows()
    })
  }

  function like( _id) {
    // e.preventDefault()
    userAxios.put(`api/tv/like/${_id}`)
    .then(res => {
      console.log(res.data)
      getUserShows()
      getAllShows()
    }
      )
    .catch(err => console.log(err))
  }




function addComment( _id, newComment) {
  userAxios.post(`api/comment/${_id}`, newComment)
  .then(res  => {
    // getUserShow()
    // getAllShows()
    console.log('user context comment res', res)
    // getComments()
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