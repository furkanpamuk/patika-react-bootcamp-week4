import React from 'react'
import { Link } from 'react-router-dom'
import LinkOutLineIcon from "../../constants/LinkOutLineIcon";

const LinkButton = ({ children, to, onClickLink, divClass, svgWidth, svgHeight }) => {
    return (
        <Link to={to} onClick={onClickLink}>
            <div className={divClass}>
                {children}
                <LinkOutLineIcon width={svgWidth} height={svgHeight}/>
            </div>
        </Link>
    )
}

export default LinkButton