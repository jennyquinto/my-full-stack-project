import React from 'react'
import { createRoot } from 'react-dom/client'

import App from "./components/App"
import axios from 'axios'

const root = createRoot(document.getElementById('root'))

axios.get('/api/contests')
    .then(resp => {
        root.render(
            <App initialContests={resp.data.contests} />
        );
    })
    .catch(console.error)




// this.setState({
//     contests: resp.data.contests
// })