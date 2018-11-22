import React from 'react'
import './MyWorkIntro.css'

const myWorkIntro = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <span className="position">{props.position}</span>
        </div>
    )
}

export default myWorkIntro