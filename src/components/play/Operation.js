import React from 'react'

function Operation({firstNum, secondNum}) {
    return (
        <div className="operation">
            <span>{firstNum}</span>
            <span>x</span>
            <span>{secondNum}</span>
        </div>
    )
}

export default Operation