import React, { Children } from 'react'

const Product=({image,price,title, children})=>{
return (
    <div>
<img src={image} alt=""/>
<p>{title}</p>
<p>{price}</p>
{children}

 </div>
)
}


const PropsChildren = () => {
  return (
    <div>
      <h1>List of Available product</h1>
      <div className='flex gap-3'>
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9190193/1.jpg?7766"
          }
          price={"8000"}
          title={"phone"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/1724373/1.jpg?0045"
          }
          price={"7000"}
          title={"itel"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/7772193/1.jpg?7788"
          }
          price={"5000"}
          title={"power-bank"}
        >
          <p className="text-red-900">black friday deal</p>
        </Product>
      </div>
    </div>
  );
}

export default PropsChildren