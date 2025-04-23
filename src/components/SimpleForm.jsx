import React from 'react'
import { useState } from 'react'
// controlled input-set up state value for all
// 
const SimpleForm = () => {
    const [firstName ,setFirstName]=useState("")
        const [lastName, setLastName] = useState("");
        const [error, setError]=useState("")
        const [users, setUsers]=useState([])


    const handleFormSubmit=(event)=>{
        event.preventDefault()
        // function
        console.log(firstName,lastName);
        if(!firstName.trim() || !lastName.trim()){
            setError("please fill all fields")
            return
        }
        // add new user to users array
        setUsers([...users, {firstName,lastName}]);
        setFirstName("")
        setLastName("")
        setError("")

    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          placeholder="First Name"
          className="myinput outline-0 my-2"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput outline-0 my-2"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
     {users.length>0 && <div className='myform'>
        <h1>List of Users</h1>
{
    users.map((user, index)=>{
        return <p key={index}>{user.firstName}{user.lastName}</p>
    })
}
      </div>}
    </div>
  );
}

export default SimpleForm