import React from 'react'
import { useData } from '../../contexts/Data';
import Question from './Question'

function Questions() {
  const {
    questionList
  } = useData();
  return (
    <div className="questions">
      {
        questionList.map((item, index) => <Question key={index} firstNumber={item.firstNumber} secondNumber={item.secondNumber} correctAnswer={item.correctAnswer} UserAnswerIsCorrect={item.UserAnswerIsCorrect} />)
      }
        
    </div>
  )
}

export default Questions