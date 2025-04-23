import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center py-7'>
<h1>Error 404</h1>
<p>Page Not Found</p>
<Link to="/"> Back To Home</Link>

    </div>
  )
}

export default NotFound