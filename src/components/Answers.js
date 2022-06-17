import React from 'react'
import Button from './Button'

import seedrandom from 'seedrandom';

export default function Answers(props){

    const {correct,incorrect,bool,selected,color} = props

    const [combineAnswers, setCombineAnswers] = React.useState([correct,incorrect[0],incorrect[1],incorrect[2]])

    function shuffleAnswers(){
        if(combineAnswers.length<3) return;
            let currentIndex = combineAnswers.length,  randomIndex;
            let arr = [...combineAnswers]
            // While there remain elements to shuffle.
            while (currentIndex !== 0) {
  
            // Pick a remaining element.
            let randomNo = seedrandom(`${props.correct}`)
            randomIndex = Math.floor(randomNo() * currentIndex);
            // console.log(`randomIndex:${randomIndex}`)
            currentIndex--;
    
        // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
        }
        return setCombineAnswers(arr)
      
  
   }

   React.useLayoutEffect(()=>{
       shuffleAnswers()

   },[])

      function orderAnswers(){
        if(bool === "boolean"){
            return ( <>
                    <div className="answers_container" onClick={(e)=>{props.func(e,props.ind)}}>
                        <Button 
                            option={"True"}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                         />

                        <Button 
                            option={"False"}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                         />
                    </div>
                    </>)
        } else { 
              return( <>
                    <div className="answers_container" onClick={(e)=>{props.func(e,props.ind)}}>
                        <Button 
                            option={combineAnswers[0]}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                        />
                         <Button 
                            option={combineAnswers[1]}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                        />
                         <Button 
                            option={combineAnswers[2]}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                        />
                         <Button 
                            option={combineAnswers[3]}
                            selectedAns={selected.answer}
                            check={selected.correct}
                            colorAns={color}
                            correct={correct}
                        />
                        
                    </div>
                    </>)
            }
        
      }

      let displayAnswers = orderAnswers()

    return(
        <>
               {displayAnswers}
        </>
    )
}

 