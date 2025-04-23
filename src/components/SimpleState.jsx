import React from 'react'
import {useState} from "react"

const SimpleState = () => {
//     const [name, setName]=useState("Declan")
//     const handleNameChange=()=>{
//         if(name==="Declan"){
//             setName("saka")
//         }else{
//             setName("Declan")
//         }
//     }
//     const [num, setNum]=useState(0)
//     // increase,
//     const handleIncrease=()=>{
//         setNum(num+1)
//     }
//     // decrease
//     const handleDecrease=()=>{
//         setNum(num-1)
//     }
//     const details = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis nam necessitatibus maiores 
//     commodi. Sint architecto nobis consequatur id animi `;
//     const [show, setShow]=useState(false)
//     const handleShowDetails=()=>{
//         setShow(!show)
//     }
//   return (
//     <div className="py-10 text-center">
      {/* <h1 className="text-3xl font-bold">useSate 1</h1>
      <p>my name is {name}</p>
      <button onClick={handleNameChange} className="btn">
        change name
      </button>
      <h1 className="text-4xl my-3.5 ">{num}</h1>
      <button onClick={handleIncrease} className="btn mr-2 !bg-red-500">
        Increase
      </button>
      <button onClick={handleDecrease} className="btn mr-2 !bg-yellow-500">
        Derease
      </button>
      <button onClick={() => setNum(0)} className="btn mr-2 !bg-green-500 ">
        Reset
      </button>
      <div className='max-w-[600px] mx-auto p-3 shadow-lg'>
<h1 className=' text-4xl font-bold'>Top Football News </h1>
<h2 className='text-2xl text-red-500'>Madrid demoslidh at the emirate stadium</h2>
<p className='mb-2'>{show? details: `${details.substring(0,100)}...`}</p>
<button onClick={handleShowDetails} className='btn !bg-purple-500'>{show? "show less":"show more"}</button>
//       </div> */}
//     </div>
//   );
const details=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit ratione veniam. Quaerat veniam iste nemo excepturi, ut numquam accusantium sint sed sapiente
 necessitatibus facere voluptates nihil, corrupti repudiandae facilis .`
const [show, setShow]=useState(false)
const showHandler=()=>{
    setShow(!show)
}
return <>
<p>{show? details : details.substring(0,100)+ "..."}</p>
<button className='btn !bg-yellow-300' onClick={showHandler}>{show? "show less":"show more"}</button>
</>
}

export default SimpleState