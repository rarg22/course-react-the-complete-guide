import React from 'react';

import './Input.css';

const Input = (props) => {
    return (
        <input className="Input" onChange={(event => props.inputChange(event))} type="text" value={props.input} placeholder='Write a word!' />

    )

}

export default Input;