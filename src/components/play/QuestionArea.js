import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import TeacherBoardIcon from '../../constants/TeacherBoardIcon'
import Answers from './Answers'
import Operation from './Operation'
import { useData } from '../../contexts/Data'

function QuestionArea({ handleQuestionAnswerStatus }) {
  let navigate = useNavigate();

  const { currentQuestion, IncrementQuestionNum, currentQuestionNum, IncrementSessionScore } = useData();
  const [answerList, setAnswerList] = useState([])
  const [isBtnPassive, setIsBtnPassive] = useState(false)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleAnswerClick = (value) => {
    setIsBtnPassive(true);
    console.log(value);
    const body = document.querySelector('body');
    if (currentQuestion.correctAnswer == value) {
      body.className = "bg-success"
      handleQuestionAnswerStatus(value, true);
      IncrementSessionScore(value);
    } else {
      body.className = "bg-wrong"
      handleQuestionAnswerStatus(value, false)
    }
    if (currentQuestionNum >= 10) {
      navigate('/final')
      body.className = "";
    } else {
      setTimeout(() => {
        IncrementQuestionNum()
        setIsBtnPassive(false);
        body.className = "";
      }, 3000);
    }
  }


  const createAnswerList = () => {
    const arr = [currentQuestion.firstNumber, currentQuestion.secondNumber]

    const allAnswers = [currentQuestion.correctAnswer]

    for (let i = 0; i < 2; i++) {

      const index = Math.floor(Math.random() * 2)

      const answer = (i === 0 ? arr[index] - 1 : arr[index] + 1) * (index === 0 ? arr[1] : arr[0])

      allAnswers.push(answer)

    }
    shuffleArray(allAnswers)

    setAnswerList(allAnswers)
  }

  useEffect(() => {

    createAnswerList();

  }, [currentQuestion])




  return (
    <div className="questionArea">

      <Operation
        firstNum={currentQuestion.firstNumber}
        secondNum={currentQuestion.secondNumber}
      />

      <TeacherBoardIcon />

      <Answers answerList={answerList} handleAnswerClick={handleAnswerClick} isBtnPassive={isBtnPassive} />
    </div>
  )
}

export default QuestionArea