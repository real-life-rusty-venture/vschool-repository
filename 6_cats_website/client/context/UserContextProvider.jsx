import React from "react";
import axios from "axios";
const UserContext = React.createContext()



function UserContextProvider(props) {


    const initState = {
        user : JSON.parse(localStorage.getItem("user")) || "",
        token : localStorage.getItem("token") || "",
        cats : [],
        errMsg : ""
    }
    const [userState, setUserState] = React.useState(initState)
    const [allCats, setAllCats] = React.useState([])


    function signup(credentials) {
        axios.post("/auth/signup", credentials)
        .then(res => {
            // const { user, token } = res.data
            // localStorage.setItem("token", token)
            // localStorage.setItem("user", JSON.stringify(user))
            // setUserState(prev => ({ //need this
            //     ...prev,
            //     user, token
            // }))
            console.log(res)
            console.log("^^^^res from signup")
        })
        .catch(err => console.log("hello"))
        // .catch(err => handleAuthErr(err.response.data.errMsg)) //doesnt exist
    }
    
    
    
    function login(credentials) {
        axios.post("/auth/login", credentials)
        .then(res => {
            // const { user, token } = res.data
            // localStorage.setItem("token", token)
            // localStorage.setItem("user", JSON.stringify(user))
            // getUserCats() //doesnt exist
            // setUserCat(prev => ({ //doesnt exist
            //     ...prev,
            //     user,
            //     token
            // }))
            console.log(res)
            console.log("^^^^^res from login")
    
    
        })
        .catch(err => console.log(err))
        // .catch((err) => handleAuthErr(err.response.data.errMsg))
    }
    function handleAuthErr(errMsg) {
        setuserState(prev => ({
            ...prev,
            errMsg
        }))


    function resetAuthErr() {
        setUserState(prev => ({
            ...prev,
            errMsg : ""
        }))
    }
    }
    



    return (
        <UserContext.Provider
        value = {{
            ...userState,
            signup,
            login,
            handleAuthErr,
            // resetAuthErr,
        }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }