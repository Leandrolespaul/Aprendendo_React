import React from 'react'
import "./Header.css"

const Header = ({ title, descricao }) => {
    return (
        <header>
            {title}
            <p>{descricao}</p>
        </header>
    )
}

export default Header