

import React from 'react';

import './UserOutput.css';

const UserOutput = props => {
    return (
        <div className="UserOutputCard">
            <p className="UserOutput"><span><strong>User: </strong></span>{props.username}</p>
            <br></br>
            <p className="UserOutput"><span><strong>Content: </strong></span>{props.content}</p>
        </div>
    )
}

export default UserOutput;