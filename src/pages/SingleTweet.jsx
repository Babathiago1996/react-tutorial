import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { tweets } from '../data'

// useparams-gives an object containing the route parameter
// {id:3}

const SingleTweet = () => {
    const {id}=useParams()
    const tweet=tweets.find((SingleTweet)=>{
     return   SingleTweet.id === id
    })
    if(!tweet){
return   (  <div className='container py-10'>
                <Link to="/timeline" className='btn btn-primary '>Back to timeline</Link>
                <h1>Tweet not found!</h1>
            </div>
        )
    }

    
 return (
   <div className="container py-10">
     <Link to="/timeline" className="btn btn-primary">
       Back to timeline
     </Link>
     <h1>{id}</h1>
     <div className="mt-5">
       <div className="flex items-center gap-3">
         <h1 className="font-bold text-2xl">{tweet.profileName}</h1>
         <p>@{tweet.handle}</p>
       </div>
       <p>{tweet.tweet}</p>
       <div className="flex gap-3">
         <p>{tweet.likes} likes</p>
         <p>{tweet.comments.length} comments</p>
       </div>
       <div>
         <h2 className="font-bold">comments</h2>
         <div className="flex flex-col gap-3">{tweet.comments.length> 0?
           tweet.comments.map((comment, index) => {
             return <p key={index}>{comment}</p>
           }) : <p className='text-gray-400 italic'> no comments yet</p>
        }
         </div>
       </div>
     </div>
   </div>
 );
}

export default SingleTweet