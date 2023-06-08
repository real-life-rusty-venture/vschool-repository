export default function ColorForm(props) {
    function handleClick(e) {
        console.log("imma firin ma lazer!")
        e.preventDefault()
        // const mecha = Math.floor(Math.random() * 7)
        props.setData(Math.floor(Math.random() * 7))
        props.setColor(props.api[props.data])
        console.log(props.color)
    }
    return (
        <form>
            <button type = "button" onClick = {handleClick}>set this color right NOW</button>
        </form>
    )
}