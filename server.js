import config from './config'
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'

import express from 'express'
import path from 'path'
import serverRender from './serverRender'


const server = express()

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
}))

server.set('view engine', 'ejs')


server.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender()
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
                initialMarkup,
                initialData
            })
        })
        .catch(error => {
            console.log(error)
        })

})
server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, config.host, () => {
    console.info('Express is listening on port ', config.port)
})