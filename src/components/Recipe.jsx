import React from 'react'
import { useEffect, useState } from 'react';
import {PuffLoader} from "react-spinners"
import { useFetch } from '../hooks/useFetch';


const url = "https://dummyjson.com/recipes";

   

const Recipe = () => {
const {data:{recipes}, isloading}  = useFetch("https://dummyjson.com/recipes")


    //  const[recipes, setRecipes]=useState([])
    // const[isloading, setIsLoading]=useState(true)

    // useEffect (()=>{
    //  const getProducts=async ()=>{
    // const res=await fetch(url)
    // const data =await res.json()
    // setIsLoading(false)
    // setRecipes(data.recipes)
    //  }
    //  getProducts()
    // }, [])
    if(isloading){
        return
        <div>
            <PuffLoader color='#ff0000' />
        </div>
    }
  return (
    <div>
        {
            recipes.map((recipe)=>{
                const{ id,name,image,ingredients,instructions,prepTimeMinutes,mealType}=recipe
                return (
                  <div key={id} >
                    <div className='mx-auto'>
                      <p>
                        <b>name:</b> {name}
                      </p>
                      <img src={image} alt="picture" />

                      <p>
                        <b>ingredients:</b>
                        {ingredients.map((ingredient, index) => {
                          return (
                              <li key={index}>{ingredient}</li>
                            
                          );
                        })}
                      </p>
                      <p>
                        <b>instructions:</b>
                        {instructions.map((instruction, index) => {
                          return (
                              <li key={index}> {instruction} </li>
                          );
                        })}
                      </p>
                      <p>
                        <b>Preparation time :</b>
                        {prepTimeMinutes}
                      </p>
                      <p> <b>MealType</b>:{mealType.map((meal, index)=>{
                        return <ol key={index}>{meal}</ol>

                      })
                        
                        }</p>
                    </div>
                  </div>
                );
            })
        }
    </div>
  )
}

export default Recipe