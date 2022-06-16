
import React, { useCallback } from 'react'
import Answers from './Answers'
import Question from './Questions'

export default function QuestionPage(props){ 
    // Select first five questions
    
    // store selected answers and update their state
    const [tally,setTally] = React.useState(0)

    const [showResult,setShowResult] = React.useState(false)

    const [colorAnswers,setColorAnswers] = React.useState(false)
    console.log(props.qs)
    const [storeAnswers, setStoreAnswers] = React.useState([
        {answer:false,selected:false,correct:false},
        {answer:false,selected:false,correct:false},
        {answer:false,selected:false,correct:false},
        {answer:false,selected:false,correct:false},
        {answer:false,selected:false,correct:false},
    ])


    function selectAnswer(e,index){
        if(!e.target.closest("button")) return;
        let ans = e.target.innerHTML
        return setStoreAnswers((prev) => {
            let arr = [...prev]
            arr[index].answer = ans
            arr[index].selected = true 
            return arr
            }
        )
    }


    // map over the data retrieved from API and plug in values into the JSX

    let displayQuestions = props.qs.map((ques,index)=>{
        
        return (
            <div className="question_container" key={Math.random()}>
                <Question question={ques.question} category={ques.category} difficulty={ques.difficulty}/> 
                    <Answers 
                        correct={ques.correct_answer}
                        incorrect={ques.incorrect_answers}
                        func={selectAnswer}
                        selected={storeAnswers[index]}
                        color={colorAnswers}
                        bool={ques.type}
                        ind={index}
                    />
            </div>
        )
    })

     function checkAnswers(){
         for(let i=0;i < storeAnswers.length; i++){
             if(storeAnswers[i].answer === props.correctAnswers[i]){
                setStoreAnswers((prev) => {
                    let arr = [...prev]
                    arr[i].correct = true
                    return arr
                })
                 setTally(prev => prev + 1)
             }
         }  
         setColorAnswers(true)
         return setShowResult(true)
     }

    
  
     return(
        <>
            {displayQuestions}
            {!showResult ? <button className='check-answers' onClick={checkAnswers}>Check answers</button> : <button className='check-answers' onClick={props.restart}>Play Again</button> }
            {showResult && <p className='final-score'>You got: {tally}/5</p>}
        </>
     )
 }