import React, { useEffect, useState } from 'react'
import { useData } from '../../contexts/Data'

function TourResults() {
    const [correctCount, setCorrectCount] = useState(0)
    const {
        sessionScore,
        questionList
    } = useData();
    useEffect(() => {
        const count = questionList.filter((item) => item.UserAnswerIsCorrect == true)
        setCorrectCount(count.length);
    }, [])

    return (
        <div className="tourResults">
            <span>Score: <span>{sessionScore}</span></span>
            <span>Questions: <span>10</span> </span>
            <span>Correct Answers: <span>{correctCount}</span></span>
        </div>
    )
}

export default TourResults