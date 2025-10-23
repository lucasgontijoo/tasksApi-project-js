export function createTask({ req, res }) {
    const { title, description } = req.body

    const task = {
        title,
        description,
    }

    return res.end(JSON.stringify(task))
}