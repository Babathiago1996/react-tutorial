import React from 'react'
import { useState } from 'react'

const User = () => {
    const [user, setUser]=useState(false)
    if(!user){
        const loggedIn =()=>{
            setUser(true)
        }
        return <div>
            <h1>you are not logged in </h1>
             <button onClick={loggedIn} className='btn'>log in</button>
        </div>    
 }
    const loggedOut=()=>{
        setUser(false)
    }

  return (
    <div>
        <h1>Welcome to your Dashboard</h1>
        <button onClick={loggedOut} className='btn'>Log out</button>

    </div>
  )
}
// )
// return
// <>
// {
//     !user? (<div>
//              <h1>you are not logged in </h1>
//             <button onClick={loggedIn} className='btn'>log in</button>
//          </div>) :( <div>
//         <h1>Welcome to your Dashboard</h1>
//          <button onClick={loggedOut} className='btn'>Log out</button>
//  </div>)
// }
// </>

// }

export default User