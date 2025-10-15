export async function jsonHandler(req, res) {
    const buffers = []

    // Tem o await pois tem que preencher o buffers com a chunk para depois construir o corpo da requisição
    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null
    }

    res.setHeader('Content-type', 'application/json')
}