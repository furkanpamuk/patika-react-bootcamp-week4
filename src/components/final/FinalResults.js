import React from 'react'
import FinResHeader from './FinResHeader'
import TourResults from './TourResults'
import RestartBox from './RestartBox'

function FinalResults() {
  return (
    <div className="finalResults">
        <FinResHeader />
        <TourResults />
        <RestartBox label={"Restart"} />
    </div>
  )
}

export default FinalResults