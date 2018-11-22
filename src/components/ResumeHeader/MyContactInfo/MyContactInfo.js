import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const myContactInfo = (props) => {
    return (
        <div>
            <span style={{float:"right"}}>shreyas.rh9@gmail.com<FontAwesomeIcon icon={faEnvelope}  /></span>
            <br/>
            <span style={{float:"right"}}>shreyas.rh9@gmail.com<FontAwesomeIcon icon={faPhone}  /></span>
            +919986700691<FontAwesomeIcon icon={faPhone} pull='right' />
            <br/>
            Bengaluru<FontAwesomeIcon icon={faMapMarker} pull='right' />
            
        </div>
    );
}

export default myContactInfo