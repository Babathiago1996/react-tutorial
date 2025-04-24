import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { tweets } from '../data'

// useparams-gives an object containing the route parameter
// {id:3}

const SingleTweet = () => {
    const {id}=useParams()
    const tweet=tweets.find((SingleTweet)=>{
        SingleTweet.id === id
    })
  return (
    <div className='container py-10'>
        <Link to="/timeline" className='btn btn-primary'>Back to timeline</Link>
        <h1>{id}</h1>
        <div className='mt-5'>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold text-2xl'>{tweet.profileName}</h1>
                <p>@{tweet.handle}</p>
            </div>
            <p>{tweet.tweet}</p>
            <div className='flex gap-3'>
                <p>{tweet.likes}likes</p>
                <p>{tweet.comments.length}comments</p>
            </div>
            <h1 className='font-bold'>comments</h1>
            <div className='flex flex-col gap-3'>
                {
                    tweet.comments.map((comment, index)=>{
                        return <p key={index}>{comment}</p>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default SingleTweet