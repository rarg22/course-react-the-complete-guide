import React from 'react';

import './InputValidation.css';

const InputValidation = (props) => {
    let messageStyle = {};
    if (props.isError) {
        messageStyle = {
            color: "red",
            fontStyle: "italic",
            fontSize: "14px",
            marginTop: "6px"
        }
    }
    return (
        <div className="InputValidation">
            <p style={messageStyle}>{props.input.length !== 0 ? props.errorMessage : ""}</p>
        </div>

    )

}

export default InputValidation;