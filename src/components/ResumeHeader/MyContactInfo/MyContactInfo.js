import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './MyContactInfo.css'

const myContactInfo = (props) => {
    return (
        <div>
            <span style={{float:"right"}}>{props.email} : <FontAwesomeIcon className="icon" icon={faEnvelope}  /></span>
            <br/>
            <span style={{float:"right"}}>{props.mobileNumber} : <FontAwesomeIcon className="icon" icon={faPhone}  /></span>
            <br/>
            <span style={{float:"right"}}>{props.place} : <FontAwesomeIcon className="icon" icon={faMapMarker}  /></span>
        </div>
    );
}

export default myContactInfo