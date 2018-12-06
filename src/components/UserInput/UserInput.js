import React from 'react';
import '../../styles/UserInterface.css';

const UserInput  = (props) => {

    const style = {
        outline: 'none',
        border: '1px solid #eee',
        borderRadius: '1px',
        padding: '10px',
        fontSize: '18px',
        boxShadow: '0 2px 5px #ccc',
    };

    return (
        <div className='UserCard'>
            <input style={style} type='text' value={props.username} onChange={props.usernameChangeHandler}/>
        </div>
    )
};

export default UserInput;