import React from 'react' 
import { createRoot } from 'react-dom/client' 

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


root.render(
    <App headerMessage="Hello props" />
);