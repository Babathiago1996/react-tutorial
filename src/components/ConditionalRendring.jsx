import React from 'react'

const ConditionalRendring = () => {
    const isLoading=false
    const isSubmitting=true
    const isError=true
    if(isLoading){
        return <h1>Loading ....</h1>
    }
    return (
        <div>
            <h1>Main Content</h1>
            <button className='btn'>
                {isSubmitting? "submitting" : "submit"}
            </button>
{isError && <h1>Error Loading page, try Again</h1>}
        </div>
    )
 
}

export default ConditionalRendring