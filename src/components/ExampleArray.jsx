import React from 'react'
import { useState } from 'react';


const films = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww",
    title: "mission impossible",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/2195755941/photo/happy-family-applauding-in-the-cinema-after-watching-a-movie.webp?a=1&b=1&s=612x612&w=0&k=20&c=oRg0sWzd5WdhvYYfrWhX2ZETaQ68q42TbIifkH1SMT8=",
    title: "Die hard",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1731748560/photo/movies-and-popcorn-pop-corn-at-cinema-family-film-night-concept-action-or-romantic-comedy.webp?a=1&b=1&s=612x612&w=0&k=20&c=MEa-8FvQu8dOvtAT-ki3XAJ9IHnMg911pUs-qoQQ7Es=",
    title: "mortal kombat",
  },
];
const ExampleArray = () => {
    const [movies, setMovies]=useState([])
if(movies.length === 0)
    return <div className='w-full max-w-[400px] mx-auto my-4 p-2.5 text-center shadow-2xl'>
        <h1>No MOVIES  Found YET </h1>
        <button onClick={() => setMovies(films)}  className='btn'>Get Movies</button>

    </div>

  return (
    <div>
<h1 className='my-4 font-bold text-3xl'>Movies Available </h1>
<section className='flex gap-3'>
    {
        movies.map((movie)=>{
            return (
              <div key={movie.id} className='w-full max-w-[300px]'>
                <img src={movie.image} alt="title"  className='object-cover w-full h-[200px]'/>
                <p>{movie.title}</p>
              </div>
            );
        })
    }
</section>
        
    </div>
  )
}

export default ExampleArray