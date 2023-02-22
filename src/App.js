import React,{useState} from 'react'
import questions from './data'
function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [showScore,setShowScore] = useState(false)
  const [score,setScore] = useState(0)

  const resetButton =  ()=>{
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
  }

  const handleQuestion = (isCorrect)=>{
    if(isCorrect){
      setScore(score + 1)
    }
    const newQuestion = currentQuestion + 1
    if(newQuestion < questions.length){
    setCurrentQuestion(newQuestion)}
    else{
      setShowScore(true)
    }
  }
  return (
    <>
    {showScore ?  
    <>
      <div>You scored {score} out of 4</div>
      <button onClick={()=>resetButton()}>Reset</button>
      </>
    :

    <section>
      <div>
        <span>Question 1 out of {questions.length}</span>
        <div>
          <p>{questions[currentQuestion].questionText}</p>
        </div>
       <div>
        {questions[currentQuestion].answerQuestion.map((answerQuestion)=>(
          <button onClick={()=>handleQuestion(answerQuestion.isCorrect)}>{answerQuestion.answerText}</button>
        ))}
       </div>
      </div>
    </section>

        }
    </>
  )
}

export default App
