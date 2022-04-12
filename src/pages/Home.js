import React from 'react'
import Header from '../components/home/Header'
import StartBox from '../components/home/StartBox'
import TotalResults from '../components/home/TotalResults'
import '../styles/home.css'
import { useData } from '../contexts/Data'

function Home() {

  const { setQuestionList } = useData();

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
    console.log(arr);
  }

  
  

  return (
    <>
      <Header />
      <TotalResults />
      <StartBox label={"Start"} fillQuestionList={fillQuestionList} />
    </>
  )
}

export default Home