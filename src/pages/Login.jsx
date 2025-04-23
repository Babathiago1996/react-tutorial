import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
// johndoe@gmail.com


const loginFormValidation=yup.object().shape({
    email:yup.string().email("invalid email adress").required("email is required"),
    password:yup .string().required("password is required")
})
const Login = () => {

    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver:yupResolver(loginFormValidation)
    })
    const redirect =useNavigate()
    const [error, setError]=useState(false)
    
    const onLogin=(data)=>{
console.log (data)
const {email, password}=data
if(email==="johndoe@gmail.com" && password === "password"){
    // redirect
    redirect("/Timeline")
}else{
    // show error 
    setError(true)
}

    };
  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
        <h1>Login to Continue</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="input mt-2 w-full"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="password "
          placeholder="password"
          className="input mt-2 w-full"
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
{error && <div className='rounded-md w-full bg-red-300 p-3 my-2'>
    <p className='text-red-500'>invalid email or password</p>
</div>}
        <button className="btn btn-primary w-full mt-2 ">Login</button>
      </form>
    </div>
  );
}

export default Login