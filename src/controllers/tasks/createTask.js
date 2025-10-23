import { randomUUID } from "node:crypto"

export function createTask({ req, res }) {
    const { title, description } = req.body

    const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
    }

    return res.end(JSON.stringify(task))
}