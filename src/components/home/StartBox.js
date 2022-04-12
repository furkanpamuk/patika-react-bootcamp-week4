import React from 'react'
import LinkButton from '../utilities/LinkButton'

function StartBox({label, fillQuestionList}) {
    return (
        <LinkButton to={"/play"} onClickLink={fillQuestionList} divClass={"startBox"} svgWidth={"447"} svgHeight={"139"}>
            <p>{label}</p>
        </LinkButton>
    )
}

export default StartBox