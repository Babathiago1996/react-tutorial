import React from 'react'
import { useEffect, useState } from 'react';
import {PuffLoader} from "react-spinners"
import { useFetch } from '../hooks/useFetch';
const url = "https://example-data.draftbit.com/authors?_limit=10";
const GetAuto = () => {
  // when i dont need to destructure ,we only rename bcoz author appear direct in the api 
    const {data:authors, isloading}  = useFetch(url)
    
    // const[authors, setAuthors]=useState([])
    // const[isloading, setIsLoading]=useState(true)

    // useEffect (()=>{
    //  const getProducts=async ()=>{
    // const res=await fetch(url)
    // const data =await res.json()
    // setIsLoading(false)
    // setAuthors(data)
    //  }
    //  getProducts()
    // }, [])
    if(isloading){
        <div>
            <PuffLoader color='#ff0000' />
        </div>
    }

  return (
    <div className='flex items-center justify-between flex-wrap w-[1240px]' >
        {
            authors.map((author)=>{
                const { id,imgUrl, person, professions, description, articleUrl}=author
                return (
                  <div key={id} className='flex w-full max-w-[600px] h-60 items-center gap-5'>
                    <div className='capitalize flex flex-col gap-4 w-full' >
                      <p>person : {person}</p>
                      <p>profession : {professions}</p>
                      <p> description :{description}</p>
                      <a href={articleUrl }> link :{articleUrl}</a>
                    </div>
                    <img src={imgUrl} alt="picture" className='w-full' />
                  </div>
                );
            })
        }
    </div>
  )
}

export default GetAuto