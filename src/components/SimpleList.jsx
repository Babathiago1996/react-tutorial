import React from 'react'

const SimpleList = () => {
        const customers=["Ade","john","jane","peter"]
        const users=["james","bola","Azeez","francis","khamis"]
  return (
    <div>
      <h1>Outputting list in react</h1>
      <div>
        {customers.map((customer, index) => {
          return <p key={index}> {customer}</p>;
        })}
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <p key={index} className="text-green-500"> {user}</p>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleList