export default function Color(props){
    // props.setColor(props.api[props.data])
    const divStyle = {
        background: `#${props.color}`
    }
    console.log(typeof props.color, "color.js lol")
    return (
        <div style = {divStyle}>
            {/* style = {divStyle} does not work either */}
            {props.color}
        </div>
    )
}