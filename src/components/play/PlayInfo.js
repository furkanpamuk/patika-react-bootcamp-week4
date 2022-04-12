import React from 'react'

function PlayInfo({currentQuestionNumber, sessionScore, tour, sessionCorrectCount}) {
  return (
    <div className="playInfo">
        <span>Score: <span>{sessionScore}</span></span>
        <span>Tour: <span>{tour}</span></span>
        <span>Questions: <span>{sessionCorrectCount}/{currentQuestionNumber}</span></span>
    </div>
  )
}

export default PlayInfo