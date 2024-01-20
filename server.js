import config from './config'
import apiRouter from './api'

import express from 'express'

const server = express()

server.get('/', (req, res)=>{
    res.send('Hello Jen from Express')
})
server.use(express.static('public'))
server.use('/api', apiRouter)

server.listen(config.port, () => {
    console.info('Express is listening on port ', config.port)
})