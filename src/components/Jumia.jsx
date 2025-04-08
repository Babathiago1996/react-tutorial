import React from 'react'

const SingleProduct =({image,price,title})=>{
    return (
      <div>
        <img src={image} alt={title} />
        <p className='text-xl font-medium'>{title}</p>
        <p className='text-2xl font-bold'>#{price}</p>
      </div>
    );
}

const Jumia = () => {
  return (
    <div>
      <h1>ALL Product</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/2062552/1.jpg?5472"
          }
          price={"2600"}
          title={"Reebok FLUXLITE - MEN"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/2346472/1.jpg?4522"
          }
          price={"6000"}
          title={"ADIDAS Lite Racer 3.0 Shoes Women"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/2218392/1.jpg?4222"
          }
          price={"7000"}
          title={
            "Mateamoda Women Shoes Sandals Heels Ladies Shoes Casual Shoes"
          }
        />
      </div>
    </div>
  );
}

export default Jumia