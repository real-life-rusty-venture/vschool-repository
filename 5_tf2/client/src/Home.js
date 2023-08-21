import SearchBar from "./SearchBar"
export default function Home() {
    const divStyle = {
        // backgroundImage : "https://cdn.cloudflare.steamstatic.com/steam/apps/440/capsule_616x353.jpg?t=1682961494",
        backgroundImage : "url(https://cdn.cloudflare.steamstatic.com/steam/apps/440/capsule_616x353.jpg?t=1682961494)",
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        textAlign : "center",
        paddingTop : "30px",
        fontSize : "large",
        height : "600px",
        color : "white"

    }
    const linkStyle = {
        display : "block",
        paddingBottom : "5px",
        color : "white"
    }
    const h1Style = {
        paddingTop : "200px"
    }
    return (
        <div style = {divStyle}>
            <h1 style = {h1Style} >hello! welcome to the tf2 webpage</h1>
            <h4>i made this because i think the tf2 mercs are all funny little guys</h4>
            {/* <link to = {"https://www.youtube.com/watch?v=GLlLQ3LmZWU"}>click here to watch the official tf2 short film Expiration Date!</link>
            <link to = {"https://www.teamfortress.com/catchup/"}>click here to read the official tf2 comics free online!</link> */}
            <a style = {linkStyle} href = {"https://www.youtube.com/watch?v=GLlLQ3LmZWU"}>click here to watch the official tf2 short film Experiation Date!</a>
            <a style = {linkStyle} href = {"https://www.teamfortress.com/catchup/"}>click here to read the official tf2 comics free online!</a>
        </div>
    )
}