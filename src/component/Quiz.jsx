import React, { useState } from 'react'
import QuestionList from './QuestionList';
import './Quiz.css'

export default function Quiz() {
      const questions = [
    {
      question: "What is npm?",
      options:['node package manager','node project manager','node package module','none of the above'],
      answer: "node package manager"
    },
    {
      question: "What is React?",
      options:['A JavaScript library for building user interfaces','A JavaScript framework for building user interfaces','A JavaScript library for building mobile applications','none of the above'],
      answer: "A JavaScript library for building user interfaces"
    },
    {
        question: "What is JSX?",
        options:['A syntax extension for JavaScript','A JavaScript library for building user interfaces','A JavaScript framework for building user interfaces','none of the above'],
        answer: "A syntax extension for JavaScript"
    },
    {
        question: "What is a component in React?",
        options:['A reusable piece of code that represents a part of the user interface','A JavaScript function that returns a React element','A JavaScript class that extends React.Component','none of the above'],
        answer: "A reusable piece of code that represents a part of the user interface"
    },
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer,setCurrentAnswer]=useState(null);
    
    const[score,setScore]=useState(0);

    const handleClick=(option)=>{
        setCurrentAnswer(option)
        if(option === questions[currentQuestionIndex].answer)
            setScore(prevScore=>prevScore+1)
    }
    const handleNextQuestion =()=>{
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setCurrentAnswer(null);
    }
  return (
    <div>
        {currentQuestionIndex<questions.length? 
    <div>
    <QuestionList question = {questions[currentQuestionIndex].question}
    options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer ={currentAnswer}/>
    <button disabled={currentAnswer===null} className={currentAnswer==null?'button-disable':'button'}
        onClick={handleNextQuestion}>Next Question</button>
        
    </div>:<div> Your Score is {score}</div>}
    </div>
  )
}