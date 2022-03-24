import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const Dashboard = () => {

    const [authors, setAuthors] = useState()
    const history = useHistory()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [refresh])


    // have a refresh state to make sure useEffect get reloaded
    const handleDelete1 = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>
                <Link to="/new"> Add an author</Link>
            </p>
            <p>We have quotes by:</p>
            <div className='row justify-content-md-center'>
                <table>
                    <thead>
                        <tr>
                            <th> Author</th>
                            <th colSpan={2}> Actions avaliable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors &&
                            authors.map((author, i) => (
                                <tr key={i}>
                                    <td> {author.name}</td>
                                    <td> <Link className='btn btn-primary' to={`/edit/${author._id}`} >Edit </Link></td>
                                    <td> <button className='btn btn-primary' onClick={() => handleDelete1(author._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard