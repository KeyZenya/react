import React from 'react';
import '../../styles/Validation.css'

const CharComponent = (props) => {
    return (
        <div className='LetterBox' onClick={props.click}>
            <input defaultValue={props.letter}/>
        </div>
    )
}

export default CharComponent;