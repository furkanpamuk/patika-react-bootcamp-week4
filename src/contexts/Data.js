import React, { useContext, createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [totalScore, setTotalScore] = useState(0)
    const [totalQuestion, setTotalQuestion] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [sessionScore, setSessionScore] = useState(0);
    const [tour, setTour] = useState(1)

    const [questionList, setQuestionList ] = useState([])
    const [currentQuestionNum, setCurrentQuestionNum] = useState(1)
    const [currentQuestion, setCurrentQuestion] = useState({})

    const IncrementQuestionNum = () => {
        setCurrentQuestionNum(currentQuestionNum + 1)
    }

    const IncrementSessionScore = (value) => {
        var result = Math.ceil(Math.sqrt(value));
        setSessionScore(sessionScore + result);
    }

    const IncrementCorrectAnswer = (value) => {
        setCorrectAnswers(correctAnswers + parseInt(value))
        localStorage.setItem("total_correct_answer", correctAnswers + parseInt(value))
    }

    const handleTotalScore = (value) => {
        setTotalScore(value);
        localStorage.setItem("total_score", parseInt(value))
    }

    const handleTotalQuestion = (value) => {
        setTotalScore(value);
        localStorage.setItem("total_question", parseInt(value))
    }

    const handleTotalCorrectAnswer = (value) => {
        setTotalScore(value);
        localStorage.setItem("total_correct_answer", parseInt(value))
    }

    const IncrementTour = () => {
        setTour(tour + 1);
    }

    const data ={ 
        totalScore,
        setTotalScore,
        handleTotalScore,

        totalQuestion,
        setTotalQuestion,
        handleTotalQuestion,

        correctAnswers,
        setCorrectAnswers,
        handleTotalCorrectAnswer,
        IncrementCorrectAnswer,

        questionList,
        setQuestionList,

        currentQuestionNum,
        setCurrentQuestionNum,
        IncrementQuestionNum,

        currentQuestion,
        setCurrentQuestion,

        sessionScore,
        setSessionScore,
        IncrementSessionScore,

        tour,
        setTour,
        IncrementTour
    }
    
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

function useData() {
    return useContext(DataContext);
}

export { DataProvider, DataContext, useData}