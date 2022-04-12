import React from 'react';
import { useData } from '../../contexts/Data';
import PointLabelItem from './PointLabelItem';

function TotalResults() {

  const { totalScore, totalQuestion, correctAnswers  } = useData();

  return (
    <div className="totalResults">
      <PointLabelItem label={"Total Point"} value={totalScore} />
      <PointLabelItem label={"Total Quetions"} value={totalQuestion} />
      <PointLabelItem label={"Correct Answer"} value={correctAnswers} />
    </div>
  )
}

export default TotalResults