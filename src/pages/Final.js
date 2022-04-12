import React, { useEffect } from 'react'
import AllQuestions from '../components/final/AllQuestions'
import FinalResults from '../components/final/FinalResults'
import { useData } from '../contexts/Data';
import '../styles/final.css'

function Final() {
  const {
    handleTotalScore,
    sessionScore,
    totalScore,
    handleTotalQuestion,
    totalQuestion,
    setCurrentQuestionNum
  } = useData();

  useEffect(() => {
    handleTotalScore(totalScore + sessionScore);
    handleTotalQuestion(totalQuestion + 10);
    setCurrentQuestionNum(1)
  }, [])

  return (
    <div className="final">
        <FinalResults />
        <AllQuestions />
    </div>
  )
}

export default Final