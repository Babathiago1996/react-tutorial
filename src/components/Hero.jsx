import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-black text-white h-screen max-h-[600px] ">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">Buy Luxury Cars</h1>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            voluptatum magnam magni dolorum excepturi tenetur vero nisi
            temporibus quod optio.
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="https://media.istockphoto.com/id/147557453/photo/sports-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pen9LZv6p4EPWzxHt-Vqnz__2pQ5U0HFZ_nZ9PIVKOw="
          alt="exotic car"
          className='hidden md:block rounded-md w-[350px] object-cover'
        />
      </div>
    </div>
  );
}

export default Hero