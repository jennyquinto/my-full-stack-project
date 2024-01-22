import React from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'


const root = createRoot(document.getElementById('root'))
const randomNum = Math.random()
const color = randomNum > 0.5 ? 'green' : 'red'

const Header = ({ message }) => {
    return (
        <h1 className='Header text-center' style={{ color }}>
            {message}
        </h1>
    )
}

Header.prototype = {
    message: PropTypes.string
}

Header.defaultProps = {
    message: 'Hello props!'
}

const App = () => {
    return (
        <div className='App'>
            <Header message='Naming Contests' />
            <div className="content">
                ...
            </div>
        </div>
    );
};

root.render(
    <App />
);