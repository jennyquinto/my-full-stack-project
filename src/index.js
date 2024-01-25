import React from 'react'
import { createRoot } from 'react-dom/client'

import App from "./components/App"
import data from "./data.json"
console.log(data)

const root = createRoot(document.getElementById('root'))

root.render(
    <App contests={data.contests} />
);