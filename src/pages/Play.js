import React, { useEffect, useState } from 'react'
import PlayInfo from '../components/play/PlayInfo'
import QuestionArea from '../components/play/QuestionArea'
import '../styles/play.css'
import { useData } from '../contexts/Data'

function Play() {
    const [sessionCorrectCount, setSessionCorrectCount] = useState(0)

    const { 
        questionList,
        currentQuestionNum, 
        setCurrentQuestion, 
        setQuestionList, 
        tour, 
        sessionScore,
        IncrementCorrectAnswer
    } = useData();

    const handleQuestionAnswerStatus = (value, isAnswerCorrect) => {
        const updatedQuestionList = questionList.map((item, index) =>
            index == (currentQuestionNum - 1) ? {...item, userAnswer: value, UserAnswerIsCorrect: isAnswerCorrect} : item
        );
        setQuestionList(updatedQuestionList);
        if (isAnswerCorrect) {
            setSessionCorrectCount(sessionCorrectCount + 1)
        }
        if (currentQuestionNum == 10) {
            IncrementCorrectAnswer(sessionCorrectCount);
        }
    }

    useEffect(() => {
        const question = questionList[currentQuestionNum - 1]
        setCurrentQuestion(question)

    }, [currentQuestionNum])

    return (
        <>
            <PlayInfo currentQuestionNumber={currentQuestionNum} tour={tour} sessionScore={sessionScore} sessionCorrectCount={sessionCorrectCount} />
            <QuestionArea handleQuestionAnswerStatus={handleQuestionAnswerStatus} />
        </>
    )
}

export default Play