import React from 'react'


export default function Question({question,category,difficulty}){

    return(
    <>     
        <div className='heading-container'>
            <span className='category'><strong>Category</strong>: {category}</span>
            <span className='difficulty'><strong>Difficulty</strong>: {difficulty}</span>
        </div>
        <h1 className="question">{question}</h1>
        
    </>)
}