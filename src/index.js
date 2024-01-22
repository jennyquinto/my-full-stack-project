import React from 'react' 
import { createRoot } from 'react-dom/client' 
import PropTypes from 'prop-types'


const root = createRoot(document.getElementById('root')) 
const randomNum = Math.random() 
const color = randomNum > 0.5 ? 'green' : 'red'

const App = (props) => {
    return (
        <h1 className='text-center' style={{ color }}>
            {props.headerMessage} -- {randomNum}
        </h1>
    );
};

App.propTypes = {
    headerMessage: PropTypes.string.isRequired
}

App.defaultProps = {
    headerMessage: 'Hello props!'
}

root.render(
    <App />
);