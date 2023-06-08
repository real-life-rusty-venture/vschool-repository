export default function Color(props){
    // props.setColor(props.api[props.data])
    const divStyle = {
        background: `#${props.color}`
        //backgroundColor: "pink" works
        //props.color is showing up like it should
        //props.color is a string
        //what is the issue here
        //solved lol
    }
    console.log(typeof props.color, "color.js lol")
    return (
        <div style = {divStyle}>
            {/* style = {divStyle} does not work either */}
            {props.color}
        </div>
    )
}