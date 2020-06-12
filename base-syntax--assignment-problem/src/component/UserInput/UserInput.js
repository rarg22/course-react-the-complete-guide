import React from 'react';

import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInputCard">
            <input onChange={(event) => props.changeUsernameHandler(event.target.value)} className="UserInput" type="text" placeholder="Write Your Name" />
        </div>
    )
}

export default UserInput;