import React from "react";
import PropTypes from 'prop-types'

const Header = ({ message }) => {
    return (
        <h1 className='Header text-center'>
            {message}
        </h1>
    )
}

Header.prototype = {
    message: PropTypes.string
}

export default Header