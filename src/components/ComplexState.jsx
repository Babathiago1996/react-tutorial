import React from 'react'
import { useState } from 'react'
// arrays and object
// maintain the data type()
// spread out  value in the initial object {...initial, change: ""}


const ComplexState = () => {
    const [user, setUser]=useState({
        fullname:"john Doe",
        age:56,
        job:"Frontend Developer"
    })
    const handleChange=()=>{
        setUser({...user, age:60, job:"Backend Engineer"})
    }
  return (
    <div>
        <div className='w-[300px] rounded-md shadow-2xl p-1.5 '>
            <h1>Employee Card</h1>
            <p>Name:{user.fullname}</p>
            <p>Role:{user.job}</p>
            <p>Age:{user.age}</p>
            <button  onClick={handleChange} className='btn !bg-red-300'>Change</button>
        </div>

    </div>
  )
}

export default ComplexState