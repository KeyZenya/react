import React from 'react';
import '../../styles/Validation.css'

const ValidationComponent = (props) => {
    let heading = null;
    if(props.length >= 5) {
        heading = (
            <h3 className='okText'>Text long enough</h3>
        )
    } else {
        heading = (
            <h3 className='badText'>Text is too short</h3>
        )
    }
    return heading
}

export default ValidationComponent;