import React from 'react'
import { useData } from '../../contexts/Data'
import LinkButton from '../utilities/LinkButton'

function RestartBox({ label }) {
    const { setSessionScore, IncrementTour, setQuestionList } = useData();

    const createRndNumber = () => {
        const rndNumber = Math.ceil(Math.random() * 10);
        return rndNumber === 0 ? 1 : rndNumber;
    }

    const fillQuestionList = () => {
        const arr = []
        for (let i = 0; i < 10; i++) {
            const firstNumber = createRndNumber();
            const secondNumber = createRndNumber();
            arr.push({
                firstNumber,
                secondNumber,
                correctAnswer: firstNumber * secondNumber,
                userAnswer: 0,
                UserAnswerIsCorrect: false
            });
        }
        setQuestionList(arr);
    }

    const handleRestartClick = () => {
        IncrementTour();
        setSessionScore(0);
        fillQuestionList();
    }

    return (
        <LinkButton onClickLink={handleRestartClick} to={"/play"} divClass={"restartBox"} svgWidth={"447"} svgHeight={"339"}>
            <span>{label}</span>
        </LinkButton>
    )
}

export default RestartBox