import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

import "./index.css"

const UpdateNote = () => {
    const {id} = useParams();
    console.log("ID:",id)
    const [values,setValues] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async() => {
           await axios.get(`https://mega-drive-backend.netlify.app/notes/${id}`)
            .then((response) => {
                console.log(response.data)
                setValues([response.data])
            }).catch(error => {
                console.log(error)
            })
        }
        getData()
    },[id])

    const updateTaskHandler = event => {
        event.preventDefault()
        console.log("Handler Clicked")
        axios.put(`https://mega-drive-backend.netlify.app/notes/${id}`,values[0])
        .then(response => {
            navigate("/")
            console.log("Response:",response)
        }).catch(error => {
            console.log("Error:",error)
        })
    }
    const check=typeof(values)
    console.log(check)
 return (
    <div className="update-page-container">
        <h2>Update Form</h2>
        {values.map(eachItem => {
            return(
                <form onSubmit={updateTaskHandler} className="form-container" key={eachItem.id}>
                    <div>
                        <p>Note Name:</p>
                        <input type="text" value={eachItem.title}  name="title" onChange={(e) => setValues([{...values[0],title:e.target.value}])} className="input-form"/>
                    </div>
                    <div>
                        <p>Description :</p>
                        <input type="text" value={eachItem.description} name="description" onChange={(e)=> setValues([{...values[0],description:e.target.value}])} className="input-form"/>
                    </div>
                    <div className="category-container">
                        <p>Category :</p>
                        <select value={eachItem.category} name="category" onChange={(e)=> setValues([{...values[0],category:e.target.value}])} className="input-form select-input-form">
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                        <br/><br/>
                    <button type="submit" className="add-button">Update</button>
                </form>
            )
        })}
       
    </div>
  )
}

export default UpdateNote