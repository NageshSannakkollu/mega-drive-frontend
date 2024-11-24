import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect,useState} from 'react'
import Header from "../Header"
import axios from 'axios'
import "./index.css"


const HomePage = () => {
 const [notesList,setNotesList] = useState([])
 const [deleted,setDeleted] = useState(true)

  useEffect(() => {
    if(deleted){
      setDeleted(false)
    const getTaskData = async() => {
      const response = await fetch("https://mega-drive-backend.netlify.app/notes");
      const data = await response.json()
      setNotesList(data)
    }
    getTaskData()
  }
  },[deleted])
  const clickOnDelete = (id) => {
    console.log(id)
    // console.log(`http://localhost:3006/notes/${_id}`)
    axios.delete(`https://mega-drive-backend.netlify.app/notes/${id}`)
    .then(response => {
      setDeleted(true)
    }).catch(err => {
      console.log(err)
    })
  }

const notesListLength = notesList.length;
console.log("type:",typeof(notesList))

  return (
    <div className='main-app-container'>
      <Header/>
      <div>
      <div className='task-list-tile-add-button-container'>
        <h1 className='task-list-title'>{`Note List: ${notesListLength}`}</h1>
        <Link to="/add-note">
            <button type='button' className='add-button'>Add Note</button>
        </Link>
        </div>
        <div>
          <table border="2" className='table-contents'>
            <thead>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>CATEGORY</th>
                  <th>ACTION</th>
                </tr>
            </thead>
          <tbody className='table-contents'>
            {notesList.map(eachItem => {
              return(
                <tr key={eachItem.id}>
                <td>{eachItem.id}</td>
                  <td>{eachItem.title}</td>
                  <td>{eachItem.description}</td>
                  <td>{eachItem.category}</td>
                  <td>
                    <Link to={`/update-note/${eachItem.id}`}>
                        <button type='button' className='add-button'>Update</button>
                    </Link>
                  </td>
                  <td>
                    <button type='button' className='delete-button' onClick={() => clickOnDelete(eachItem.id)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
           </table>
        </div>        
      </div>
    </div>
  )
}

export default HomePage