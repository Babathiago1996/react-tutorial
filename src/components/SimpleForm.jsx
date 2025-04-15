import React from 'react'
import { useState } from 'react'
// controlled input-set up state value for all
// 
const SimpleForm = () => {
    const [firstName ,setFirstName]=useState("")
        const [lastName, setLastName] = useState("");


    const handleFormSubmit=(event)=>{
        event.preventDefault()

    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
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
          onChange={(event) => setFirstName(event.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SimpleForm