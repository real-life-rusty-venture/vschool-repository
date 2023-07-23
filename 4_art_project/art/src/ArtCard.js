import React from "react"
import Context from "./App"
export default function ArtCard(props) {
    const artCardStyle = {
        "border" : "2px solid white",
        "textAlign" : "center"
      }
      const imageStyle = {
        "height" : "200px",
        "paddingTop" : "40px"
      }
      const wordStyle = {
        "color" : "#e0e0e0"
      }
      const [artCardState, setArtCardState] = React.useState(artCardStyle)
      const [imageState, setImageState] = React.useState(imageStyle)
      const mediaQuery = window.matchMedia('(max-width: 600px)')
      function queryMatcher() {
        if (mediaQuery.matches) {
            const smallCardStyle = {
                "textAlign" : "center"
            }
            const smallImageStyle = {
              "paddingTop" : "0px",
              "width" : "85%"
            }
            setArtCardState(smallCardStyle)
            setImageState(smallImageStyle)
        }
      }
      React.useEffect(queryMatcher, [])
    return (
        <div style = {artCardState}>
            <img src = {props.imgUrl} style = {imageState}></img>
            <h4 style = {wordStyle}>{props.title}</h4>
            <p style = {wordStyle}>{props.description}</p>
        </div>
    )
}