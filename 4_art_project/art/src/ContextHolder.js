import React from "react";
import { Context } from "react";
const ConnerText = React.createContext()
function ContextHolder(props) {
    let divStyle = {
        "backgroundColor" : "#303030",
        "color" : "#3e0e0e0",
        "display" : "grid",
        "gridTemplateColumns" : "1fr 1fr 1fr 1fr"
      }
      // Check if the media query is true
    
    
    // const Provider = props => {
    const [divValue, setDivValue] = React.useState(divStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    // if (mediaQuery.matches) {
    //     const smallScreenStyle = {
    //         "backgroundColor" : "#303030",
    //         "color" : "#3e0e0e0"
    //     }
    //     setDivValue(smallScreenStyle)
    // }
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallScreenStyle = {
                "backgroundColor" : "#303030",
                "color" : "#3e0e0e0"
            }
            setDivValue(smallScreenStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    //^^^^^^^^^^^IDK WHAT IM DOING
    // Then trigger an alert
    //   return (
    //         <Context.Provider
    //         value = {{divValue: [divValue, setDivValue]}}
    //         >
    //         {props.children}
    //         </Context.Provider>
    //   )
    return (
        <ConnerText.Provider value = {{
            divValue: [divValue, setDivValue]

        }}>
            {props.children}
        </ConnerText.Provider>
    )
    //    }
}
export {ConnerText, ContextHolder}