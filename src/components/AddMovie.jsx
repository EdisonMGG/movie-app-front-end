import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddMovie = () => {
    const [data, setData] = useState(
        {
            "movie": "",
            "actor": "",
            "date": "",
            "releaseyr": "",
            "theater": "",
            "production": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8001/AddMovie", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "test") {
                    alert("success")

                } else {
                    alert("error")

                }
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
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Movie</label>
                                <input type="text" className="form-control" name='movie' id='movie' value={data.movie} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Actor</label>
                                <input type="text" className="form-control" name='actor' id='actor' value={data.actor} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" name="date" id="date" className="form-control" value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Releaseyr</label>
                                <input type="text" className="form-control" name='releaseyr' id='releaseyr' value={data.releaseyr} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Theater</label>
                                <input type="text" className="form-control" name='theater' id='theater' value={data.theater} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Production</label>
                                <input type="text" className="form-control" name='production' id='production' value={data.production} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="btn btn-success" onClick={readValue}>Submit</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddMovie