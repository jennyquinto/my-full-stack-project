import config from './config'

import express from 'express'

const server = express()

server.get('/', (req, res)=>{
    res.send('Hello Jen from Express')
})

// server.get('/about.html', (req, res)=>{
//     fs.readFile('./about.html', (err,data)=>{
//         res.send(data.toString())
//     })
// })
server.use(express.static('public'))

server.listen(config.port, () => {
    console.info('Express is listening on port ', config.port)
})