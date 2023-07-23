export default function Carrd(props) {
    const data = props.data
    const gradientStyle = {
        backgroundImage: 'linear-gradient(data.angle, data.color1, data.color2)'
        // backgroundColor: "black"
        //linear gradient function doesnt work. dont know how to fix it. pretty sure its at least the only thing broken tho
    }
    function handleClick(){
        props.setFlipper(prev => !prev)
    }
    return(
        <div>
            <div style = {gradientStyle}>
                <h1>HELLO....IS THERE ANYBODY IN THERE</h1>
            </div>
            <button onClick = {handleClick}>get the code bitch</button>
        </div>
    )
}