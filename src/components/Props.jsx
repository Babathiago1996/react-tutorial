import React from 'react'

const Button =({content, bg})=>{

    console.log(content)
    return (
        <button className={`${bg} text-white mx-auto rounded-lg w-[200px] h-[40px]`}>{content}</button>
    )
}

const Props = () => {
  return (
    <div>
      <h1>Props</h1>
      <Button content={"sign up"} bg={"bg-black"} />
      <Button content={"log in"} bg={"bg-red-200"} />
      <Button  content={"register"} bg={"bg-green-500"}/>
      <Button content={"continue with google"} bg={"bg-amber-400"} />
      <Button content={"shop now"} bg={"bg-gray-900"} />
    </div>
  );
}

export default Props