import React from "react"
export default function Home() {
    const divStyle = {
        "backgroundColor" : "#303030",
        "paddingLeft" : "100px",
        "color" : "#e0e0e0",
        "paddingBottom" : "200px",
        "paddingTop" : "25px"
    }
    const [divState, setDivState] = React.useState(divStyle)
    const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallDivStyle = {
                "backgroundColor" : "#303030",
                "color" : "#e0e0e0",
                "textAlign" : "center",
                "height" : "400px",
                "margin" : "5px"
            }
            setDivState(smallDivStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    return (
        <div style = {divState}>
            <h1>My Art Project</h1>
            <h3>On this website i have collected art made by artists suffering from various mental illnesses.</h3>
            <h3>I have done this to raise awareness for what it's like to live with these disorders and how it feels from the inside.</h3>
        </div>
    )
}