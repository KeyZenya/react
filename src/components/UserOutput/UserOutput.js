import React from 'react';
import '../../styles/UserInterface.css';

const UserOutput  = (props) => {
    return (
        <div className='UserCard'>
            <h1>{props.username}</h1>
            <h3>Previous username is {props.prevUsername}</h3>
        </div>
    )
};

export default UserOutput;