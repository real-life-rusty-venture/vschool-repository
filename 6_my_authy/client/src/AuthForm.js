export default function AuthForm(props) {
    const {  inputs: { username, password }, handleClick, buttonText, handleChange, setFlipper, offer } = props
    return (
        <form>
            <input placeholder="username" name ="username" value = {username} onChange = {handleChange}/>
            <input placeholder="password" name ="password" value = {password} onChange = {handleChange} />
            <button onClick={handleClick}>{buttonText}</button>
            <h4 onClick={()=>setFlipper(prev => !prev)}>{offer}</h4>
        </form>
    )
}
