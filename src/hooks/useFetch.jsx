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
// import { useEffect, useState } from "react";

// export const useGetData = (url) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const getData = async () => {
//     try {
//       const res = await fetch(url);
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       console.log(error);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, [url]);

//   return { data, isLoading, isError };
// };


