import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'

import express from 'express'
import path from 'path'

const server = express()

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
}))

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    res.render('index.ejs', {
        content: 'Hello <em>Jen!</em>, from Express and EJS'
    })
})
server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
    console.info('Express is listening on port ', config.port)
})