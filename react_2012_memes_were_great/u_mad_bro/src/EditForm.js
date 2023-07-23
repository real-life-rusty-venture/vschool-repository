export default function EditForm(props) {
    return props.showEdit && (
    <form onSubmit = {(e) => props.handleEditClick(e, props.id)}>
    <input name = "topText" placeholder = "top text goes here lol" onChange={(e) => props.handleChange(e, props.img)}/>
    <input name = "bottomText" placeholder="bottom text goes here lol" onChange={(e) => props.handleChange(e, props.img)}/>
    <button>submitty</button>
    </form>
    )
}