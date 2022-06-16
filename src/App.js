import React from 'react'
import './App.css';
import QuestionPage from "./components/QuestionPage"
import FirstPage from "./components/FirstPage"
import seedrandom from 'seedrandom';

export default function App() {

  const [isGame,setIsGame] = React.useState(false)
  const [questions,setQuestions] = React.useState([])
  const [shuffle,setShuffle] = React.useState(true)
  const [storeAnswers,setStoreAnswers] = React.useState({})
  const [fetchData,setFetchData] = React.useState(false)
  
  // let myrng = seedrandom(2)
  // console.log(myrng())
  // myrng = seedrandom(3)
  // console.log(myrng())


    React.useEffect(()=>{
      if(!isGame){
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res=>res.json())
        .then((data)=>{
          setStoreAnswers(prev=>(
            data.results.map((ques) => ques.correct_answer)
          ))
          return setQuestions(data.results)}
          )  
      }
    
  },[isGame])

 
  const fiveQuestions = questions.slice(0,5)
  console.log(storeAnswers)

  console.log(fiveQuestions)

  function startQuiz(){
    return setIsGame(prev => !prev)
  }

  
  return (
    <div className="App">
      {!isGame && <section><FirstPage func={startQuiz}/></section>}

      {isGame && 
        <section className='quiz-page'>
          <QuestionPage qs={fiveQuestions} shuffle={shuffle} correctAnswers={storeAnswers}  restart={startQuiz}/>
          
        </section>
        }
    </div>
  );

}