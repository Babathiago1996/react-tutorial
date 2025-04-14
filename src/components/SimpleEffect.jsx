import React from 'react'
import { useState,useEffect } from 'react'

// changing (re render)
// run side effect (initial loading, once the component change)
// cb, optional dependency array list []- once(initials , [value1, value2]

const SimpleEffect = () => {
    const [count, setCount]=useState(1)
    const [num, setNum]=useEffect(20)
    useEffect(()=>{
        console.log("useEffect ran")
    } , [count, num])
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>
      <h1 className="text-3xl ">{count} </h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        change
      </button>
      <h1 className="text-3xl ">{num} </h1>
      <button className="btn" onClick={() => setNum(num + 1)}>
        change
      </button>
    </div>
  );
}

export default SimpleEffect