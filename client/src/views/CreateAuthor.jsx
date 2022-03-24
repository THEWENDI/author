import React, { useState } from 'react'
import axios from "axios"
import { useHistory, Link } from "react-router-dom"

const CreateAuthor = () => {

    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, { name })
            .then(res => { // successful
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key]["message"])
                }
                console.log(errorArr)
                setErrors(errorArr)
            })
    }

    const cancleForm =() =>{
        setName("")
        history.push("/")
    }

    return (
        <div>
            <p>
                <Link to="/"> Home</Link>
            </p>
            <p>Add a new author:</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name :</label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button className='btn btn-dark'> Submit</button>
            </form>
            <button type="button" className = 'btn btn-danger' onClick={cancleForm}> Cancel</button>
            {
                errors.map((err, i) => {
                    return (
                        <p key={i} style={{ color: "red" }}>{err}</p>
                    )
                })
            }
            
        </div>
    )
}

export default CreateAuthor