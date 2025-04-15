import React from 'react'
import { useEffect, useState } from 'react'

 export const useFetch = (api) => {
    const [data, setData]=useState([])
    const [isloading, setIsLoading]=useState(true)

    const getData=async ()=>{
        const res=await fetch(api)
        const result=await res.json()
        setData(result)
        setIsLoading(false)
    }
    useEffect(()=>{
        getData()
    }, [api])

    
    return {data, isloading};
 }

