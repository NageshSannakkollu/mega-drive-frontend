import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import "./index.css"

const AddNote = () => {
    const [values,setValues] = useState({
        title:'',
        description:'',
        category:''
    })

    const navigate = useNavigate()
    
    const addNoteHandler = e => {
        e.preventDefault()
        console.log("Values:",values)
        axios.post(`http://localhost:3006/notes`,values)
        .then((response)=> {
            console.log(response)
            navigate("/")
        }).catch(error => {
            console.log(error)
        })
    }

    

  return (
    <div className='update-page-container'>
        <form onSubmit={addNoteHandler} className="form-container" >
        <div>
            <h4>Note Title :</h4>
            <input type='text' name="task" placeholder='Enter title...' className="input-form" onChange={e => setValues({...values,title:e.target.value})} required/>
        </div>
        <div>
            <h4>Description :</h4>
            <input type='text' name="status" placeholder='Enter description...' className="input-form" onChange={e => setValues({...values,description:e.target.value})} required/>
        </div>
        <div>
            <h4>Category :</h4>
            <select className="input-form" onChange={e => setValues({...values,category:e.target.value})}>
                <option value="work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Others" selected>Others</option>
            </select>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Add Note</button>
        </form>
    </div>
  )
}

export default AddNote