import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IExample } from './models/Example'
import { list } from './Services'

function Detail() {

    const navigate = useNavigate()
    const [arr, setArr] = useState<IExample>({})

    useEffect(() => {
        list().then(res => {
            setArr(res.data)
        })
    }, [])

    return (
        <>
            <h2 className='m-3'>Example Data List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Province</th>
                        <th scope="col">District</th>
                        <th scope="col">PL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.result?.map((item, index) =>
                            <tr>
                                <th scope="row"> {item.id} </th>
                                <td> {item.province} </td>
                                <td> {item.district} </td>
                                <td> {item.pl} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Detail