import React from 'react'
import "./Input.css"

const Input = ({ type, label, ...props }) => {
    return (
        <div className='input_container'>
            <label htmlFor=''>{label}</label>
            <input type={type}{...props}></input>
        </div>

    )
}

export default Input