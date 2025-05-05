import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';

// useForm -register, handleSubmit
// yup zod
// define our validation schema
const validationSchema=yup.object().shape({
    firstName:yup.string().required("first name is required"),
    lastName:yup.string().required("last name is required"),
    email:yup.string().email("invalid email address").required("email is required"),
    password:yup.string().required("password is required").min(7, "minimum password length is 7")

})

const ReactHookForm = () => {
    const{register , handleSubmit, formState:{errors},reset}= useForm({resolver: yupResolver(validationSchema)})
const  [isSubmitting, setIsSubmitting]=useState(false)



const handleFormSubmit=(data)=>{
    setIsSubmitting(true)
// after doing what you are meant to  then reset
setTimeout(()=>{
    console.log(data);

setIsSubmitting(false);
reset();
}, 5000)

}

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform bg-white "
      >
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={
            errors.firstName
              ? "input mt-2 w-full"
              : "input mt-2 w-full border border-red-500"
          }
          placeholder="First Name "
          {...register("firstName", { required: "first name is required" })}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={
            errors.lastName
              ? "input mt-2 w-full"
              : "input mt-2 w-full border border-red-500"
          }
          placeholder="last name"
          {...register("lastName", { required: "last name is required" })}
        />
        <p className="text-red-500">
          {" "}
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className={
            errors.email
              ? "input mt-2 w-full"
              : "input mt-2 w-full border border-red-500"
          }
          {...register("email", { required: "email is required" })}
        />
        <p className="text-red-500"> {errors.email && errors.email.message}</p>
        <input
          type="number"
          placeholder="Enter your password"
          className={
            errors.password
              ? "input mt-2 w-full"
              : "input mt-2 w-full border border-red-500"
          }
        />
        <p className="text-red-500"> {errors.password && errors.password.message}</p>

        <button type="submit" className="btn btn-primary w-full mt-2.5">
          {
            isSubmitting?"submitting":"submit"
          }
        </button>
      </form>
    </div>
  );
}

export default ReactHookForm