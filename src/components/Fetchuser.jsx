import React from 'react'
import { useEffect, useState } from 'react'
import {PacmanLoader} from "react-spinners"
import { useFetch } from '../hooks/useFetch';
// firstname lastname ,image ,gender,
// address main-street phonix missispi
const url = "https://dummyjson.com/users";
const Fetchuser = () => {
        const {data:{users}, isloading}  = useFetch(url)
    

    // const [users, setUsers]=useState([])
    // const [isloading, setIsLoading]=useState(true)

    // useEffect(()=>{
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data.users)
    //         // const femaleUsers = data.users.filter((u)=> u.gender === 'female')
    //         setIsLoading(false)
    //         setUsers(data.users)
    //     })
    // }, [])
    if(isloading){
        return <div>
            <PacmanLoader color='#14532d' />
        </div>
    }

  return (
      <div className="flex flex-wrap items-start gap-3 w-[1240px] mx-auto">
        <h1 className='text-[40px] font-[700] uppercase w-[1240px] text-center my-4'>list of our customer</h1>
        {users.map((user) => {
          const {
            id,
            firstName,
            lastName,
            image,
            gender,
            address: address,
            city,
            state,
          } = user;
          return (
            <div
              key={id}
              className="flex gap-[30px] items-center mb-6  font-[500] font-[satoshi] shadow-lg w-full max-w-[400px] shadow-[#143149] border-rounded h-[200px]"
            >
              <div className="p-2">
                <p className="uppercase w-full"> firstName :{firstName} </p>
                <p className="uppercase w-full ">LastName :{lastName}:</p>
                <p className="uppercase w-full"> Gender : {gender}:</p>
                <p className="uppercase w-full">
                  State : {user.address.state}:
                </p>
                <p className="uppercase w-full"> City :{user.address.city}:</p>
                <p className="uppercase w-full">
                  Address :{user.address.address}:
                </p>
              </div>

              <img src={image} alt="picture" />
            </div>
          );
        })}
      </div>
  );
}

export default Fetchuser