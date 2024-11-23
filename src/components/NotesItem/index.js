import {Link} from 'react-router-dom'
import "./index.css"

const NoteItem = (props) => {
    const {noteDetails,clickOnDelete} = props
    const{id,title,description,category} = noteDetails;

    const deleteButtonHandler = () => {
        clickOnDelete(id)
    }

  return (
    <div className='task-item-list' key={id}>
        <p>{id}</p>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{category}</p>
        <Link to={`/update-note/${id}`}>
            <button type='button' className='add-button'>Update</button>
        </Link>
            <button type='button' className='delete-button' onClick={deleteButtonHandler}>Delete</button>
    </div>
  )
}

export default NoteItem