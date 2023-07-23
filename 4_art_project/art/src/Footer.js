import React from "react"
export default function Footer() {
    const divStyle = {
        "backgroundColor" : "black",
        "color" : "white", 
        "border" : "2px solid white",
        "textAlign" : "center",
        "fontSize" : "30px",
        "height" : "150px",
    }
    const [divState, setDivState] = React.useState(divStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallDivStyle = {
                "backgroundColor" : "black",
                "color" : "white",
                "textAlign" : "center",
                "fontSize" : "20px",
                "paddingTop" : "4px",
                "paddingBottom" : "5px"
            }
            setDivState(smallDivStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    return (
        <div style = {divState}>
            <h4>I do not own any of these images. All credit goes to the artists.</h4>
        </div>
    )
}