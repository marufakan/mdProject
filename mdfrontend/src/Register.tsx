import React, { useState } from 'react'
import { save } from './Services'
import { useNavigate } from 'react-router-dom'


function Register() {

    const navigate = useNavigate()
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [pl, setPl] = useState('')

    const fncSend = (evt: React.FormEvent) => {
        evt.preventDefault()
        save(province, district,pl).then(res => {
            if(res.status){
                alert("Registration is successful\n ")
                navigate('/detail')
            }
        }).catch(err => alert("registration could not be made"));

    }

    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2> Data Save </h2>
                    <form onSubmit={fncSend}>
                        <div className="mb-3">
                            <label htmlFor="province" className="form-label">Province</label>
                            <input onChange={(evt) => setProvince(evt.target.value)} className="form-control" id="province" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">District</label>
                            <input onChange={(evt) => setDistrict(evt.target.value)} type="content" className="form-control" id="district" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pl" className="form-label">pl</label>
                            <input onChange={(evt) => setPl(evt.target.value)} type="content" className="form-control" id="pl" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    )
}


export default Register


