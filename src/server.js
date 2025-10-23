import http from 'node:http'
import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

// Nesse arquivo acontece a criação do meu server e a chamada dos meu middlewares

const server = http.createServer(async (req, res) => {
    await jsonHandler(req, res)
    routeHandler(req, res)
})

server.listen(3333)