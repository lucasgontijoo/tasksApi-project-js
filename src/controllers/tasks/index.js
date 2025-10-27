export function index({ req, res, database }) {
    const tasks = database.select("tasks")
    return res.end(JSON.stringify(tasks))
}