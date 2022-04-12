import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Play from "../pages/Play"
import Final from "../pages/Final"
import { useData } from '../contexts/Data'

function Router() {
  const {
    setTotalScore,
    setTotalQuestion,
    setCorrectAnswers,
    } = useData();

  useEffect(() => {
    const lsTotalScore = localStorage.getItem("total_score") ?? 0;
    const lsTotalQuesion = localStorage.getItem("total_question") ?? 0;
    const lsTotalAnswer = localStorage.getItem("total_correct_answer") ?? 0;
    
    setTotalScore(parseInt(lsTotalScore))
    setTotalQuestion(parseInt(lsTotalQuesion))
    setCorrectAnswers(parseInt(lsTotalAnswer))
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="play" element={<Play/>} />
      <Route path="final" element={<Final/>} />
    </Routes>
  )
}
export default Router;