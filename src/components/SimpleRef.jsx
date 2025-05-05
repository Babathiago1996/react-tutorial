import React from 'react'
import { useRef, useEffect } from 'react'
// useref can hold mutable value , those value cannot trigger re-render
// target dom element (p,div,input)


const SimpleRef = () => {
    const headingContainer=useRef(null);
    console.log(headingContainer.current)
    const inputRef=useRef(null)
    useEffect (()=>{
inputRef.current.focus();
    }, [])
  return (
    <div className='container'>
        <h1 className='text-3xl text-center'>use ref </h1>
        <form className='myform'>
            <label htmlFor="sub" className='mylabel'>suscribe to our news letter</label>
            <input ref={inputRef}  type="email" placeholder='Email Address' className='input' />
            <button className='btn mt-1 '>Suscribe</button>
        </form>
    </div>
  )
}

export default SimpleRef