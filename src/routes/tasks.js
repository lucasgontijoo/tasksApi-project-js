import { createTask } from "../controllers/tasks/createTask.js"

// Nesse arquivo são listadas as rotas de tasks da minha api e o controller de cada rota está modularizado

export const tasks = [
    {
        method: "POST",
        path: "/tasks",
        controller: createTask
    },
    {
        method: "GET",
        path: "/tasks",
        controller: (req, res) => {
            res.end("Lista de tasks.")
        }
    },
    {
        method: "PUT",
        path: "/tasks/:id",
        controller: (req, res) => {
            res.end("Task atualizada pelo id.")
        }
    },
    {
        method: "DELETE",
        path: "/tasks/:id",
        controller: (req, res) => {
            res.end("Task deletada pelo id.")
        }
    },
    {
        method: "PATCH",
        path: "/tasks/:id/completea",
        controller: (req, res) => {
            res.end("Completed_at da task atuzalizado.")
        }
    },
]