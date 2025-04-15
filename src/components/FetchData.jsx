import React from 'react'
import { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';


// product----> product(api)
const url = "https://dummyjson.com/products";
const FetchData = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading]=useState(true)


    useEffect(()=>{
const getProducts=async ()=>{
    const res=await fetch(url)
    const data =await res.json()
    console.log(data.products)
    setIsLoading(false)
     setProducts(data.products);

};
getProducts()
 }, [])

 if(isloading){
    return (
      <div className='flex items-center justify-center h-60'>
        <HashLoader color="#ff0000" />
      </div>
    );
 }
  return (
    <div>
<h1>List of products</h1>
<section className='flex items-center gap-2.5 flex-wrap '>
{
    products.map((product)=>{
const {id, title,price,images ,stock,rating }=product
return (
  <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md ">
    <img src={images[0]} alt="title" className="w-full object-cover h-[75%] " />
    <p className="text-xl font-semi-bold  ">{title}</p>
    <div className='flex g-3'>
      <p className="font-bond text-2xl">{price}</p>
      <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
        {stock} left in stock
      </p>
    </div>
    <p className={rating>=3.5? "text-green-500" :"text-red-300"}>{rating}</p>
  </div>
);

    })
}
</section>
    </div>
  )
}

export default FetchData