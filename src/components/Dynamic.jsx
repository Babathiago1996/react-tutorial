import React from 'react'

const Dynamic = () => {
    const myName="john doe"
  return (
    <div className='text-3xl text-center'>
<h1>DYNAMIC VALUE</h1>
<p>my name is {myName} </p>
<p>{1+1}</p>

    </div>
  )
}

export default Dynamic