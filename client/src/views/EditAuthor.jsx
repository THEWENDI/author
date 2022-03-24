import React, { useEffect,useState } from 'react'
import axios from "axios"
import { useHistory, useParams, Link } from "react-router-dom"

const EditAuthor = () => {

    const { id } = useParams() // get id
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key]["message"])
                }
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
            <p>Edit this author</p>
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

export default EditAuthor