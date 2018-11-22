import React from 'react'
import './MyPhoto.css'

const myPhoto = (props) => {
    return(
        <img className="myPhoto" src={props.source}></img>
    )
}

export default myPhoto