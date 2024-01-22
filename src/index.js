import React from 'react'
import { createRoot } from 'react-dom/client'
import PropTypes from 'prop-types'


const root = createRoot(document.getElementById('root'))
const randomNum = Math.random()
const color = randomNum > 0.5 ? 'green' : 'red'

const Header = ({ message }) => {
    return (
        <div>
            <h1 className='text-center' style={{ color }}>
                {message} -- {randomNum}
            </h1>
        </div>
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
        <div>
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