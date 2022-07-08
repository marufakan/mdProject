import React, { } from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()


  return (
    <>
      <div className='row jumbotron bg-secondary'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className="jumbotron bg-secondary">
            <h1>Welcome :D</h1>
            <p>Please Click For register page</p>
            <button type="submit" className="btn btn-primary" onClick={(evt) => navigate('/register')}>Click</button>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>

    </>
  )
}

export default Welcome