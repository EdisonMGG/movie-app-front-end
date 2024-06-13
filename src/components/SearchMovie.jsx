import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchMovie = () => {
    const [data, setData] = useState(
        {
            "name": ""

        }
    )
    const [result, setResult] = useState(
        []
    )
    //delete function
    const DeleteMovie = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8001/DeleteMovie",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }
    //input value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8001/SearchMovie", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch(
            (err) => {
                alert(err.message)
            }
        ).finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="btn btn-secondary" onClick={readValue}>Search</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Actor</th>
                                <th scope="col">Date</th>
                                <th scope="col">Release year</th>
                                <th scope="col">Theatre</th>
                                <th scope="col">Production</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                result.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.actor}</td>
                                            <td>{value.date}</td>
                                            <td>{value.releaseyr}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.trainer}</td>
                                            <td><div className="btn btn-danger" onClick={() => { DeleteMovie(value._id) }}>Delete</div></td>
                                        </tr>
                                    }
                        )
                            }

                    </tbody>
                </table>
            </div>
        </div>
        </div >
    )
}

export default SearchMovie