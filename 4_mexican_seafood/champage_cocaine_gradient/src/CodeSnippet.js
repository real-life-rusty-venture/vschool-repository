export default function CodeSnippet(props) {
    const textacle = `background-color: linear-gradient(${props.data.angle} ${props.data.color1} ${props.data.color2})`
    console.log(props.data)
    console.log("^^^^props.data")
    return props.flipper && (
        <textarea readOnly value = {textacle}></textarea>
    )
}