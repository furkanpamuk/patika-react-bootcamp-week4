import React from 'react'
import Questions from './Questions'
import QuestionsHeader from './QuestionsHeader'

function AllQuestions() {
  return (
    <div className="allQuestions">
        <QuestionsHeader />
        <Questions />
    </div>
  )
}

export default AllQuestions