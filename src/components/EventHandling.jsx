import React from 'react'

const EventHandling = () => {
    const handlClick=()=>{
        alert("welcome user")
    }
    // using parameter
    const handleClickAgain=(name)=>{
        alert(`welcome ${name}`)
    }
  return (
    <div className='text-center py-10'>
<h1 className='text-3xl mb-4'>Responding to user interaction</h1>
<button onClick={handlClick} className='btn'>Click me</button>

{/* using parameter */}

<button onClick={()=> handleClickAgain("john")} className='btn ml-3'>Click Again</button>

    </div>
  )
}

export default EventHandling