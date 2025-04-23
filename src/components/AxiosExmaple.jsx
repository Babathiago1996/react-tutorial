import React from 'react'
import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com"});

const AxiosExmaple = () => {
    const getData=async ()=>{
      // using axios
      //        const {data} =await axios("https://dummyjson.com/products")
// or
    //   const response = await axios("https://dummyjson.com/products");
            const response = await axiosInstance("/products");
// bcoz data is what we are intrested in not response
      console.log(response.data.user);
    }
    getData()
  return (
    <div>AxiosExmaple</div>
  )

}
//    const getRecipes = async () => {
//      // using axios
//      //        const {data} =await axios("https://dummyjson.com/products")
//      // or
//      const response = await axiosInstance("/products");
//      console.log(response);
//    };
//    getRecipes();
//    return <div>AxiosExmaple</div>;
// }

export default AxiosExmaple