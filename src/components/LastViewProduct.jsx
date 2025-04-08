import React from "react";
import MystoreSingleProduct from "./MystoreSingleProduct";

const LastViewProduct = () => {
  const myProduct = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/9348004/1.jpg?2413",
      title: "EasyPie 20000 MAh Dual USB-C/ Micro Portable Power Bank",
      price: "3000",
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/9348004/1.jpg?2413",
      title: "EasyPie 20000 MAh Dual USB-C/ Micro Portable Power Bank",
      price: "3000",
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/9348004/1.jpg?2413",
      title: "EasyPie 20000 MAh Dual USB-C/ Micro Portable Power Bank",
      price: "3000",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1>last viewed</h1>
        <p>see all</p>
      </div>

      <section className="flex gap-2 items-center mt-2.5">
        {myProduct.map((good) => {
          return <MystoreSingleProduct key={good.id} {...good} />;
        })}
      </section>
    </div>
  );
};

export default LastViewProduct;
