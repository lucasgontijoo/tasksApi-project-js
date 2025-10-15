import http from 'node:http'
import { jsonHandler } from './middlewares/jsonHandler.js'

const server = http.createServer(async (req, res) => {
    await jsonHandler(req, res)
    console.log(req.body)
})

server.listen(3333)