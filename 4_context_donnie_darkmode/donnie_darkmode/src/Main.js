export default function Main() {
    const {color, toggleTheme} = React.useContext(contexticle)
    return (
        <div className = {color}>
            <h4>push this button to change the theme BITCH!</h4>
            <button onClick = {toggleTheme}>cum in my daddy uwu</button>
        </div>
    )
}